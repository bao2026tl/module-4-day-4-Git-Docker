import { Controller, Get, Post, Body } from '@nestjs/common';
import { UsersService } from './users.service';
import { ApiProperty } from '@nestjs/swagger';

// Class này giúp Swagger UI tự động tạo form nhập liệu
export class CreateUserDto {
  @ApiProperty({ example: 'Nguyen Van A', description: 'Tên của user' })
  name!: string;

  @ApiProperty({ example: 'nguyenvana@gmail.com', description: 'Email của user' })
  email!: string;
}

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post()
  create(@Body() body: CreateUserDto) {
    return this.usersService.create(body);
  }

  @Get()
  findAll() {
    return this.usersService.findAll();
  }
}