import fs from 'fs';
import path from 'path';

const fullPath = path.resolve(__dirname, '../assets/full');
const thumbPath = path.resolve(__dirname, '../assets/thumb');

function imageExistsFull(image: string): string | null {
  const imagePath = path.join(fullPath, `${image}.jpg`);
  if (fs.existsSync(imagePath)) return imagePath;
  return null;
}

function imageExistsThumb(image: string, width: number, height: number): string | null {
  const imagePath = path.join(thumbPath, `${image}-${width}-${height}.jpg`);
  if (fs.existsSync(imagePath)) return imagePath;
  return null;
}

export { imageExistsFull, imageExistsThumb };
