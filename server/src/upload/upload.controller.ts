import {
  Controller,
  Post,
  UploadedFile,
  UseInterceptors,
} from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { multerConfig } from '../common/fileUpload/multer.config';

@Controller('upload')
export class UploadController {
  @Post('single')
  @UseInterceptors(FileInterceptor('file', multerConfig))
  uploadSingle(@UploadedFile() file: Express.Multer.File) {
    return {
      message: 'File uploaded successfully',
      filePath: file.path,
      fileName: file.filename,
    };
  }
}
