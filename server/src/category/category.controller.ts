import {
  Controller,
  Post,
  Get,
  Param,
  Patch,
  Delete,
  Body,
  UploadedFile,
  UseInterceptors,
} from '@nestjs/common';
import { CategoryService } from './category.service';
import { CreateCategoryDto } from './dto/create-category.dto';
import { UpdateCategoryDto } from './dto/update-category.dto';
import { FileInterceptor } from '@nestjs/platform-express';
import { multerConfig } from '../common/fileUpload/multer.config';
import type { Express } from 'express';

@Controller('categories')
export class CategoryController {
  constructor(private readonly categoryService: CategoryService) {}

  @Post()
  @UseInterceptors(FileInterceptor('image', multerConfig))
  create(
    @Body() dto: CreateCategoryDto,
    @UploadedFile() image: Express.Multer.File,
  ) {
    return this.categoryService.create(dto, image);
  }

  @Get()
  findAll() {
    return this.categoryService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.categoryService.findOne(id);
  }

  @Patch(':id')
  @UseInterceptors(FileInterceptor('image', multerConfig))
  update(
    @Param('id') id: string,
    @Body() dto: UpdateCategoryDto,
    @UploadedFile() image: Express.Multer.File,
  ) {
    return this.categoryService.update(id, dto, image);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.categoryService.remove(id);
  }
}
