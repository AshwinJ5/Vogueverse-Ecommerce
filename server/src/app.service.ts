import { Injectable } from '@nestjs/common';
import * as fs from 'fs';
import * as path from 'path';

@Injectable()
export class AppService {
  getHello(): string {
    const filePath = path.join(process.cwd(), 'public', 'welcome.html');
    return fs.readFileSync(filePath, 'utf-8');
  }
}
