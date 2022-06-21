import fs from 'fs';
import supertest from 'supertest';
import path from 'path';
import app from '../index';

const request = supertest(app);

describe('Testing Endpoint Responses || index.ts -> images.ts', () => {
  it('[Valid] API Health Check || Returns 200', async () => {
    const response = await request.get('/api/');
    expect(response.status).toBe(200);
  });

  it('[Valid] Image Query (fjord, 500, 500) || Returns 200', async () => {
    const response = await request.get('/api/images/?filename=fjord&width=500&height=500');
    expect(response.status).toBe(200);
  });

  it('[Invalid] Image Does not Exist Query (haha,500,500) || Returns 404', async () => {
    const response = await request.get('/api/images/?filename=haha&width=500&height=500');
    expect(response.status).toBe(404);
  });

  it('[Invalid] Image Query without Dimensions (fjord, 500, 500) || Returns 400', async () => {
    const response = await request.get('/api/images/?filename=fjord&width=&height=');
    expect(response.status).toBe(400);
  });
});

afterAll(() => {
  fs.unlinkSync(path.resolve(__dirname, '../../assets/thumb/fjord-500-500.jpg'));
});
