import { expect } from '@jest/globals';
import readData, { getWords } from './readData';

describe('readData', () => {
  test('should return an object with keys jobs and index', () => {
    const result = readData();
    expect(result).toHaveProperty('jobs');
    expect(result).toHaveProperty('index');
  });

  test('should receive an array with strings and return an array with stopwords deleted', () => {
    const array = ['word', 'an', 'stop']; //it should remove 'an' word
    const result = getWords(array);
    expect(result).toHaveLength(2);
  });
});
