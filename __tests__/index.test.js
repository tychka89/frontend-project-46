/* eslint-disable no-undef */
/* eslint no-underscore-dangle: 0 */
import { fileURLToPath } from 'url';
import path, { dirname } from 'path';
import { readFileSync } from 'fs';
import gendiff from '../src/index.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const getFixturePath = (filename) => path.join(__dirname, '..', '__fixtures__', filename);

describe('Stylish Tests', () => {
  test('filejson', () => {
    const filename1 = getFixturePath('file1.json');
    const filename2 = getFixturePath('file2.json');
    const resultname = getFixturePath('file_result.txt');
    const result = readFileSync(resultname, 'utf8');
    expect(gendiff(filename1, filename2)).toEqual(result);
  });
});
