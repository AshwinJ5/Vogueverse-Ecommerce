import { promises as fs } from 'fs';
import { join } from 'path';

export async function deleteFile(filePath: string): Promise<void> {
  try {
    const fullPath = join(process.cwd(), filePath);

    await fs.unlink(fullPath);
    console.log('🗑️ File deleted:', fullPath);
  } catch (error) {
    // If file doesn't exist, silently ignore
    if (error.code === 'ENOENT') {
      console.warn('⚠️ Tried to delete non-existing file:', filePath);
      return;
    }

    console.error('❌ Error deleting file:', error);
    throw error;
  }
}
