import {
  Injectable,
  NotFoundException,
  ConflictException,
} from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import bcrypt from 'bcryptjs';

@Injectable()
export class UserService {
  constructor(private prisma: PrismaService) {}

  async create(data: CreateUserDto) {
    const existingUser = await this.prisma.user.findUnique({
      where: { email: data.email },
    });

    if (existingUser) {
      throw new ConflictException('Email already exists');
    }

    let hashedPassword: string | null = null;

    if (data.password) {
      hashedPassword = await bcrypt.hash(data.password, 10);
    }

    return this.prisma.user.create({
      data: {
        name: data.name || null,
        email: data.email,
        password: hashedPassword,
        googleId: data.googleId || null,
        phone: data.phone || null,
      },
      select: {
        id: true,
        name: true,
        email: true,
        googleId: true,
        phone: true,
        createdAt: true,
      },
    });
  }

  async findAll() {
    return this.prisma.user.findMany({
      where: { isDeleted: false, status: 'ACTIVE' },
      select: {
        id: true,
        name: true,
        email: true,
        googleId: true,
        phone: true,
        createdAt: true,
      },
      orderBy: { createdAt: 'desc' },
    });
  }

  async findById(id: string) {
    const user = await this.prisma.user.findUnique({
      where: { id },
      select: {
        id: true,
        name: true,
        email: true,
        googleId: true,
        phone: true,
        isDeleted: true,
        createdAt: true,
      },
    });

    if (!user || user.isDeleted) {
      throw new NotFoundException('User not found');
    }

    return user;
  }

  async update(id: string, data: UpdateUserDto) {
    await this.findById(id);

    if (data.password) {
      data.password = await bcrypt.hash(data.password, 10);
    }

    return this.prisma.user.update({
      where: { id },
      data: {
        ...data,
      },
      select: {
        id: true,
        name: true,
        email: true,
        googleId: true,
        phone: true,
        updatedAt: true,
      },
    });
  }

  async remove(id: string) {
    await this.findById(id);

    return this.prisma.user.update({
      where: { id },
      data: {
        isDeleted: true,
        status: 'INACTIVE',
      },
    });
  }
}
