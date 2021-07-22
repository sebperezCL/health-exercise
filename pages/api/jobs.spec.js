import { expect } from '@jest/globals';
import { createMocks } from 'node-mocks-http';
import jobs from './jobs';

describe('/api/jobs', () => {
  test('should returns an array with jobs', async () => {
    const { req, res } = createMocks({
      method: 'GET',
    });

    await jobs(req, res);

    expect(res._getStatusCode()).toBe(200);
    expect(Array.isArray(JSON.parse(res._getData()).jobs)).toBe(true);
  });

  test('should return an array filtered with fewer jobs than the call without filters (by keyword)', async () => {
    const { req: reqUnfilter, res: resUnfilter } = createMocks({
      method: 'GET',
    });

    const { req: reqFilter, res: resFilter } = createMocks({
      method: 'GET',
      query: {
        type: 'keyword',
        value: 'nurse',
      },
    });

    await jobs(reqUnfilter, resUnfilter);
    expect(resUnfilter._getStatusCode()).toBe(200);
    const jobsUnfilter = JSON.parse(resUnfilter._getData()).totalJobs;

    await jobs(reqFilter, resFilter);
    expect(resFilter._getStatusCode()).toBe(200);
    const jobsFilter = JSON.parse(resFilter._getData()).totalJobs;

    expect(jobsUnfilter).toBeGreaterThan(jobsFilter);
  });

  test('should return an array filtered with fewer jobs than the call without filters (by job_type)', async () => {
    const { req: reqUnfilter, res: resUnfilter } = createMocks({
      method: 'GET',
    });

    const { req: reqFilter, res: resFilter } = createMocks({
      method: 'GET',
      query: { type: 'job_type', value: 'Per-Diem' },
    });

    await jobs(reqUnfilter, resUnfilter);
    expect(resUnfilter._getStatusCode()).toBe(200);
    const jobsUnfilter = JSON.parse(resUnfilter._getData()).totalJobs;

    await jobs(reqFilter, resFilter);
    expect(resFilter._getStatusCode()).toBe(200);
    const jobsFilter = JSON.parse(resFilter._getData()).totalJobs;

    expect(jobsUnfilter).toBeGreaterThan(jobsFilter);
  });
});
