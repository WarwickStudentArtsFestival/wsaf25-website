import fs from 'fs';
import path from 'path';

export async function getGalleryFiles(): Promise<string[]> {
  const dir = path.join(process.cwd(), 'public/wpaint-gallery');
  const files = fs.readdirSync(dir).filter((file) => file.endsWith('.jpg'));
  return files;
}
