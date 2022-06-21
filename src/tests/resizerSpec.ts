import resizer from '../resizer';
import fs from 'fs';
import path from 'path';

describe('Testing Image Resizer', async () => {
  it('[Valid] Checks if File is Resized (icelandwaterfall, 500, 500) || Returns Path', async () => {
    const imagePath = await resizer('icelandwaterfall', 500, 500);
    expect(imagePath).toBeTruthy();
  });
});

afterAll(() => {
  fs.unlinkSync(path.resolve(__dirname, '../../assets/thumb/icelandwaterfall-500-500.jpg'));
});
