import { diskStorage, StorageEngine } from 'multer';
import { extname } from 'path';

interface MulterConfig {
  storage: StorageEngine;
}

export const multerConfig: MulterConfig = {
  storage: diskStorage({
    destination: (req, file, callback) => {
      callback(null, './uploads');
    },
    filename: (req, file, callback) => {
      const uniqueName = `${Date.now()}-${Math.round(Math.random() * 1e9)}`;
      const extension: string = extname(file.originalname || '');
      callback(null, uniqueName + extension);
    },
  }) as StorageEngine,
};
