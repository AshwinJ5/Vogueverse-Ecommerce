import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { SampleService } from './sample.service';
import { CreateSampleDto } from './dto/create-sample.dto';
import { UpdateSampleDto } from './dto/update-sample.dto';

@Controller('sample')
export class SampleController {
  constructor(private readonly sampleService: SampleService) {}

  @Post()
  create(@Body() dto: CreateSampleDto) {
    return this.sampleService.create(dto);
  }

  @Get()
  findAll() {
    return this.sampleService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.sampleService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() dto: UpdateSampleDto) {
    return this.sampleService.update(id, dto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.sampleService.remove(id);
  }
}
