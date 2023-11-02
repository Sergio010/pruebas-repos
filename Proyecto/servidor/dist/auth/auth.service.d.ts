import { JwtService } from '@nestjs/jwt';
import { Model } from 'mongoose';
import { CreateUserDto, UpdateAuthDto, LoginDto } from './dto';
import { User } from './entities/user.entity';
import { JwtPayload } from './interfaces/jwt-payload';
import { LoginResponse } from './interfaces/login-response';
export declare class AuthService {
    private userModel;
    private jwtService;
    constructor(userModel: Model<User>, jwtService: JwtService);
    create(createUserDto: CreateUserDto): Promise<User>;
    updateUser(userId: string, updateUserDto: UpdateAuthDto): Promise<User>;
    deleteUser(userId: string): Promise<User>;
    login(loginDto: LoginDto): Promise<LoginResponse>;
    findAll(): Promise<User[]>;
    findUserById(id: string): Promise<any>;
    findOne(email: object): Promise<User | undefined>;
    getUser(query: object): Promise<User>;
    getJwtToken(payload: JwtPayload): any;
    cambiarPassword(userId: any, passwordActual: string, passwordNueva: string): Promise<void>;
}
