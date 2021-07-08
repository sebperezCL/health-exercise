import { expect } from '@jest/globals';
import { createMocks } from 'node-mocks-http';
import filters from './filters';

describe('/api/filters', () => {
  test('returns an object with the filters for the application', async () => {
    const { req, res } = createMocks({
      method: 'GET',
    });

    await filters(req, res);
    expect(res._getStatusCode()).toBe(200);
    expect(JSON.parse(res._getData())).toMatchObject({
      job_type: [
        {
          key: 'Per-Diem',
        },
        {
          key: 'Traveler',
        },
        {
          key: 'Part-time',
        },
        {
          key: 'Full-time',
        },
      ],
    });
  });
});
