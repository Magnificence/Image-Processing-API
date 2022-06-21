import sharp from 'sharp';
import path from 'path';

const fullPath = path.resolve(__dirname, '../assets/full/');
const thumbPath = path.resolve(__dirname, '../assets/thumb/');

async function resizer(image: string, width: number, height: number): Promise<string | null> {
  try {
    const imagePath = path.resolve(thumbPath, `${image}-${width}-${height}.jpg`);
    await sharp(path.resolve(fullPath, `${image}.jpg`))
      .resize(width, height)
      .toFile(imagePath);
    return path.resolve(imagePath);
  } catch (err) {
    return null;
  }
}

export default resizer;
