
import { BadRequestException, Injectable, InternalServerErrorException, UnauthorizedException, } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { JwtService } from '@nestjs/jwt';
import { Model } from 'mongoose';
import * as bcrypt from 'bcrypt';
import * as bcryptjs from 'bcryptjs';
import { /*RegisterUserDto,*/ CreateUserDto, UpdateAuthDto, LoginDto } from './dto';
import { User } from './entities/user.entity';
import { JwtPayload } from './interfaces/jwt-payload';
import { LoginResponse } from './interfaces/login-response';
import { NotFoundException } from '@nestjs/common';

@Injectable()
export class AuthService {
  constructor(
    @InjectModel( User.name ) 
    private userModel: Model<User>,
    private jwtService: JwtService,
   ) {}

  async create(createUserDto: CreateUserDto): Promise<User> {
    const hashedPassword = await bcrypt.hash(createUserDto.password, 10);
    const createdUser = new this.userModel({
      email: createUserDto.email,
      name: createUserDto.name,
      lastname: createUserDto.lastname,
      rut: createUserDto.rut,
      phone: createUserDto.phone,
      password: hashedPassword, // Usar la contraseña hasheada
    });
  
    return createdUser.save();
  }

  async updateUser(userId: string, updateUserDto: UpdateAuthDto): Promise<User> {
    const existingUser = await this.userModel.findByIdAndUpdate(userId, updateUserDto, { new: true });
    if (!existingUser) {
      throw new NotFoundException(`User #${userId} not found`);
    }
    return existingUser;
  }

  async deleteUser(userId: string): Promise<User> {
    const deletedUser = await this.userModel.findByIdAndDelete(userId);
   if (!deletedUser) {
     throw new NotFoundException(`User #${userId} not found`);
   }
   return deletedUser;
  }

  async login(loginDto: LoginDto /*email:string, password: string*/ ):Promise<LoginResponse> {
    const { email, password } = loginDto;
    console.log(email)
    const user = await this.userModel.findOne({ email });
    //const user = await this.getUser({ email });
    //const user = await this.findOne({ email });
    console.log("?", user)
    if ( !user ) {
      throw new UnauthorizedException('Credenciales no válidas - Email');
    }
    if ( !bcryptjs.compareSync( password, user.password ) )/*(!(password === user.password))*/ {
      throw new UnauthorizedException('Credenciales no válidas - Contraseña');
    }
    const { password:_, ...rest  } = user.toJSON(); 
    return {
      //user: rest,
      token: this.getJwtToken({ id: user._id }),
    }
  }

  findAll(): Promise<User[]> {
    return this.userModel.find();
  }

  async findUserById( id: string ) {
    const user = await this.userModel.findById( id );
    const { password, ...rest } = user.toJSON();
    return rest;
  }

  async findOne(email: object): Promise<User | undefined> {
    return this.userModel.findOne({ email }).exec();
  }

  async getUser(query: object ): Promise<User> {
    return this.userModel.findOne(query);
  }
  
  getJwtToken( payload: JwtPayload ) {
    console.log (payload)
    const token = this.jwtService.sign(payload);
    return token;
  }

  // async verificarPassword(email:string, password: string){
  //   const user = await this.userModel.findOne({ email });
  //   if (user){
  //     if ( !bcryptjs.compareSync( password, user.password )){
  //       return true;
  //     }
  //   }
  //   else{
  //     throw new UnauthorizedException('Credenciales no válidas - Email');      
  //   }
  // }

  async cambiarPassword(userId, passwordActual: string, passwordNueva: string){
    const user = await this.userModel.findById({ userId });
    if (user){
      if ( !bcryptjs.compareSync( passwordActual, user.password )){
        user.password = await bcrypt.hash(passwordNueva, 10);
          this.userModel.findByIdAndUpdate(userId, user, { new: true });
      }
    }
    else{
      throw new UnauthorizedException('Credenciales no válidas - Email');      
    }
  }
}
