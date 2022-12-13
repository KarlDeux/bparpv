const request = require('supertest');
const app = require('../index');

describe('GET /', () => {
  it('should return a JSON object with the message property', async () => {
    const res = await request(app).get('/');
    expect(res.statusCode).toEqual(200);
    expect(res.body).toHaveProperty('message');
  });
});

describe('GET /api/environment', () => {
  it('should return a JSON object with the environment property', async () => {
    const res = await request(app).get('/api/environment');
    expect(res.statusCode).toEqual(200);
    expect(res.body).toHaveProperty('environment');
  });
});