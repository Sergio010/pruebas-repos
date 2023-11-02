
import { Controller, Get, Post, Put,  Body, Res, Param, Delete, UseGuards, Request, HttpStatus } from '@nestjs/common';
import { AuthService } from './auth.service';
import { CreateUserDto, LoginDto, /*RegisterUserDto,*/ UpdateAuthDto } from './dto';
import { AuthGuard } from './guards/auth.guard';
import { LoginResponse } from './interfaces/login-response';
import { User } from './entities/user.entity';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post()
  create(@Body() createUserDto: CreateUserDto) {
    return this.authService.create(createUserDto);
  }

  @UseGuards( AuthGuard )
  @Get()
  findAll( @Request() req: Request ) {
    return this.authService.findAll();
  }
  @UseGuards( AuthGuard )
  @Put('/:id')
  async updateUser(@Res() response,@Param('id') userId: string,
  @Body() updateAuthDto: UpdateAuthDto) {
    try {
      const existingUser = await this.authService.updateUser(userId, updateAuthDto);
      return response.status(HttpStatus.OK).json({message: 'User has been successfully updated',existingUser,});
    } 
    catch (err) {
      return response.status(err.status).json(err.response);
    }
  }
  @UseGuards( AuthGuard )
  @Delete('/:id')
  async deleteUser(@Res() response, @Param('id') userId: string){
    try {
      const deletedUser = await this.authService.deleteUser(userId);
      return response.status(HttpStatus.OK).json({
      message: 'User deleted successfully',
      deletedUser,});
    }
    catch (err) {
      return response.status(err.status).json(err.response);
    }
  }

  @Post('/login')
  login( @Body() loginDto: LoginDto /*email: string, password:string*/  ) {
    //console.log("C",loginDto)
    return this.authService.login( loginDto/*email,password*/);
  }

  @Put('/cambiarPassword')
  cambiarPassword(@Body() userId: string,passwordActual:string, passwordNueva: string ){
    return this.authService.cambiarPassword(userId, passwordActual,passwordNueva);
  }

  /*
  @Post('/register')
  register( @Body() registerDto: RegisterUserDto  ) {
    return this.authService.register( registerDto );
  }
  */

  @UseGuards( AuthGuard )
  @Get('check-token')
  checkToken( @Request() req: Request ): LoginResponse {      
    const user = req['user'] as User;
    return {
     // user,
      token: this.authService.getJwtToken({ id: user._id })
    }
  }
}
