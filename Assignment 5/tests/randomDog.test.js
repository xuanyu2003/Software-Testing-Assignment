const request = require('supertest')

describe('GET /api/dogs/random - Positive Test', () => {

  it('should return random dog image with valid structure', async () => {
    const response = await request('http://localhost:3001')
      .get('/api/dogs/random')

    // 1. HTTP status should be 200
    expect(response.status).toBe(200)

    // 2. success should be true
    expect(response.body.success).toBe(true)

    // 3. data should be returned
    expect(response.body.data).toBeDefined()

    // 4. data should contain imageUrl
    expect(response.body.data.imageUrl).toBeDefined()

    // 5. imageUrl type should be string
    expect(typeof response.body.data.imageUrl).toBe('string')
  })

})