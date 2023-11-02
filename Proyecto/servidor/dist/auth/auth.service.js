"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
var _a, _b;
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const jwt_1 = require("@nestjs/jwt");
const mongoose_2 = require("mongoose");
const bcrypt = require("bcrypt");
const bcryptjs = require("bcryptjs");
const user_entity_1 = require("./entities/user.entity");
const common_2 = require("@nestjs/common");
let AuthService = class AuthService {
    constructor(userModel, jwtService) {
        this.userModel = userModel;
        this.jwtService = jwtService;
    }
    async create(createUserDto) {
        const hashedPassword = await bcrypt.hash(createUserDto.password, 10);
        const createdUser = new this.userModel({
            email: createUserDto.email,
            name: createUserDto.name,
            lastname: createUserDto.lastname,
            rut: createUserDto.rut,
            phone: createUserDto.phone,
            password: hashedPassword,
        });
        return createdUser.save();
    }
    async updateUser(userId, updateUserDto) {
        const existingUser = await this.userModel.findByIdAndUpdate(userId, updateUserDto, { new: true });
        if (!existingUser) {
            throw new common_2.NotFoundException(`User #${userId} not found`);
        }
        return existingUser;
    }
    async deleteUser(userId) {
        const deletedUser = await this.userModel.findByIdAndDelete(userId);
        if (!deletedUser) {
            throw new common_2.NotFoundException(`User #${userId} not found`);
        }
        return deletedUser;
    }
    async login(loginDto) {
        const { email, password } = loginDto;
        console.log(email);
        const user = await this.userModel.findOne({ email });
        console.log("?", user);
        if (!user) {
            throw new common_1.UnauthorizedException('Credenciales no válidas - Email');
        }
        if (!bcryptjs.compareSync(password, user.password)) {
            throw new common_1.UnauthorizedException('Credenciales no válidas - Contraseña');
        }
        const _a = user.toJSON(), { password: _ } = _a, rest = __rest(_a, ["password"]);
        return {
            token: this.getJwtToken({ id: user._id }),
        };
    }
    findAll() {
        return this.userModel.find();
    }
    async findUserById(id) {
        const user = await this.userModel.findById(id);
        const _a = user.toJSON(), { password } = _a, rest = __rest(_a, ["password"]);
        return rest;
    }
    async findOne(email) {
        return this.userModel.findOne({ email }).exec();
    }
    async getUser(query) {
        return this.userModel.findOne(query);
    }
    getJwtToken(payload) {
        console.log(payload);
        const token = this.jwtService.sign(payload);
        return token;
    }
    async cambiarPassword(userId, passwordActual, passwordNueva) {
        const user = await this.userModel.findById({ userId });
        if (user) {
            if (!bcryptjs.compareSync(passwordActual, user.password)) {
                user.password = await bcrypt.hash(passwordNueva, 10);
                this.userModel.findByIdAndUpdate(userId, user, { new: true });
            }
        }
        else {
            throw new common_1.UnauthorizedException('Credenciales no válidas - Email');
        }
    }
};
exports.AuthService = AuthService;
exports.AuthService = AuthService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)(user_entity_1.User.name)),
    __metadata("design:paramtypes", [typeof (_a = typeof mongoose_2.Model !== "undefined" && mongoose_2.Model) === "function" ? _a : Object, typeof (_b = typeof jwt_1.JwtService !== "undefined" && jwt_1.JwtService) === "function" ? _b : Object])
], AuthService);
//# sourceMappingURL=auth.service.js.map