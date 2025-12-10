import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateSampleDto } from './dto/create-sample.dto';
import { UpdateSampleDto } from './dto/update-sample.dto';

export type Sample = CreateSampleDto & { id: string };

@Injectable()
export class SampleService {
  private samples: Sample[] = [];

  create(dto: CreateSampleDto) {
    const newSample = {
      id: Date.now().toString(),
      ...dto,
    };

    this.samples.push(newSample);
    return newSample;
  }

  findAll() {
    return this.samples;
  }

  findOne(id: string) {
    const item = this.samples.find((s) => s.id === id);
    if (!item) throw new NotFoundException('Sample not found');
    return item;
  }

  update(id: string, dto: UpdateSampleDto) {
    const index = this.samples.findIndex((s) => s.id === id);
    if (index === -1) throw new NotFoundException('Sample not found');

    this.samples[index] = { ...this.samples[index], ...dto };
    return this.samples[index];
  }

  remove(id: string) {
    const index = this.samples.findIndex((s) => s.id === id);
    if (index === -1) throw new NotFoundException('Sample not found');

    const deleted = this.samples[index];
    this.samples.splice(index, 1);

    return deleted;
  }
}
