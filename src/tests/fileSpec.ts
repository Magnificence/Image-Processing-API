import { imageExistsFull, imageExistsThumb } from '../file';
import path from 'path';
import fs from 'fs';
import resizer from '../resizer';

describe('Testing File Checks || file.ts', () => {
  it('[Valid] Check for Image in Thumb Folder (palmtunnel) || Returns Path', async () => {
    await resizer('palmtunnel', 500, 500);
    expect(imageExistsThumb('palmtunnel', 500, 500)).toBeTruthy();
  });

  it('[Invalid] Check for invalid Image Thumb folder (random) || Returns NULL', () => {
    expect(imageExistsThumb('random', 500, 500)).toBeFalsy();
  });

  it('[Valid] Check for Existent Image in Full Folder (fjord) || Returns Path', () => {
    expect(imageExistsFull('fjord')).toBeTruthy();
  });

  it('[Invalid] Check for Non-existent Image (random) || Returns NULL', () => {
    expect(imageExistsFull('random')).toBeFalsy();
  });
});

afterAll(() => {
  fs.unlinkSync(path.resolve(__dirname, '../../assets/thumb/palmtunnel-500-500.jpg'));
});
