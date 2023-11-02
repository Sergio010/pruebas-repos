import { Request } from '@nestjs/common';
import { AuthService } from './auth.service';
import { CreateUserDto, LoginDto, UpdateAuthDto } from './dto';
import { LoginResponse } from './interfaces/login-response';
import { User } from './entities/user.entity';
export declare class AuthController {
    private readonly authService;
    constructor(authService: AuthService);
    create(createUserDto: CreateUserDto): Promise<User>;
    findAll(req: Request): Promise<User[]>;
    updateUser(response: any, userId: string, updateAuthDto: UpdateAuthDto): Promise<any>;
    deleteUser(response: any, userId: string): Promise<any>;
    login(loginDto: LoginDto): Promise<LoginResponse>;
    cambiarPassword(userId: string, passwordActual: string, passwordNueva: string): Promise<void>;
    checkToken(req: Request): LoginResponse;
}
