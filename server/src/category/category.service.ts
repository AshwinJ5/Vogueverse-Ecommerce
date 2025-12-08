import {
  Injectable,
  NotFoundException,
  ConflictException,
} from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateCategoryDto } from './dto/create-category.dto';
import { UpdateCategoryDto } from './dto/update-category.dto';
import { deleteFile } from '../common/fileUpload/file.utils';
import slugify from 'slugify';
import { Status } from '@prisma/client';

@Injectable()
export class CategoryService {
  constructor(private prisma: PrismaService) {}

  async create(dto: CreateCategoryDto, image?: Express.Multer.File) {
    const slug = slugify(dto.name, { lower: true, strict: true });

    const existing = await this.prisma.category.findUnique({
      where: { slug },
    });

    if (existing) throw new ConflictException('Category already exists');

    return this.prisma.category.create({
      data: {
        name: dto.name,
        slug,
        status: dto.status ? (dto.status as Status) : Status.ACTIVE,
        image: image ? image.filename : null,
      },
    });
  }

  async findAll() {
    return this.prisma.category.findMany({
      where: { isDeleted: false },
    });
  }

  async findOne(id: string) {
    const category = await this.prisma.category.findUnique({ where: { id } });

    if (!category || category.isDeleted)
      throw new NotFoundException('Category not found');

    return category;
  }

  async update(
    id: string,
    dto: UpdateCategoryDto,
    image?: Express.Multer.File,
  ) {
    const category = await this.prisma.category.findUnique({ where: { id } });

    if (!category || category.isDeleted)
      throw new NotFoundException('Category not found');

    let newImage = category.image;

    if (image) {
      if (category.image) {
        await deleteFile(`uploads/${category.image}`);
      }
      newImage = image.filename;
    }

    return this.prisma.category.update({
      where: { id },
      data: {
        name: dto.name || category.name,
        status: dto.status ? (dto.status as Status) : category.status,
        image: newImage,
      },
    });
  }

  async remove(id: string) {
    const category = await this.prisma.category.findUnique({ where: { id } });

    if (!category || category.isDeleted)
      throw new NotFoundException('Category not found');

    return this.prisma.category.update({
      where: { id },
      data: { isDeleted: true },
    });
  }
}
