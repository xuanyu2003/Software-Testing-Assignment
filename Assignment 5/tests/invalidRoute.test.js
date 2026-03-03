const request = require('supertest');

describe('GET /api/dogs/invalid - Negative Test', () => {

  it('should return 404 with proper error message for invalid route', async () => {
    const response = await request('http://localhost:3001')
      .get('/api/dogs/invalid');

    // 1. HTTP status should be 404
    expect(response.status).toBe(404);

    // 2. Response should contain error message
    expect(response.body.error).toBeDefined();

    // 3. Verify the returned error message is correct
    expect(response.body.error).toBe('Route not found');

    // 4. success should be false
    expect(response.body.success).toBe(false);
  });

});