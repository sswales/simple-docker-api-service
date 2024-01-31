import axios from 'axios';

describe('Endpoint Tests', () => {
  it('POST /endpoint-one', async () => {
    const response = await axios.post('http://localhost:3000/endpoint-one', {
      username: 'test@test.com'
    });
    expect(response.status).toBe(200);
    expect(response.data).toContain({type: 'one'});
  });

  it('POST /endpoint-two', async () => {
    const response = await axios.post('http://localhost:3000/endpoint-two', {
      username: 'test@test.com'
    });
    expect(response.status).toBe(200);
    expect(response.data).toContain({ type: 'two' });
  });
});