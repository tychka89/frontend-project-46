/* eslint-disable no-undef */
/* eslint no-underscore-dangle: 0 */
import { fileURLToPath } from 'url';
import path, { dirname } from 'path';
import { readFileSync } from 'fs';
import genDiff from '../src/index.js';
import { describe } from 'jest-circus';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const getFixturePath = (filename) => path.join(__dirname, '..', '__fixtures__', filename);

describe('JSON Stylish Tests', () => {
  test('filejson', () => {
    const filepath1 = getFixturePath('file1.json');
    const filepath2 = getFixturePath('file2.json');
    const resultname = getFixturePath('file_result.txt');
    const result = readFileSync(resultname, 'utf8');
    expect(genDiff(filepath1, filepath2)).toEqual(result);
  });
});

describe('YAML Stylish Test', () => {
  test('fileyml', () => {
    const filepath1 = getFixturePath('file1.yml');
    const filepath2 = getFixturePath('file2.yml');
    const resultname = getFixturePath('file_result.txt');
    const result = readFileSync(resultname, 'utf8');
    expect(genDiff(filepath1, filepath2)).toEqual(result);
  });
});

describe('JSON Plain Test', () => {
  test('filejson', () => {
    const filepath1 = getFixturePath('file1.json');
    const filepath2 = getFixturePath('file2.json');
    const resultname = getFixturePath('expectedPlain.txt');
    const result = readFileSync(resultname, 'utf8');
    expect(gendiff(filepath1, filepath2, 'plain')).toEqual(result);
  });
});

describe('YML Plain Test', () => {
  test('fileyml', () => {
    const filepath1 = getFixturePath('file1.yml');
    const filepath2 = getFixturePath('file2.yml');
    const resultname = getFixturePath('expectedPlain.txt');
    const result = readFileSync(resultname, 'utf8');
    expect(gendiff(filepath1, filepath2, 'plain')).toEqual(result);
  });
});

describe('YAML Plain Test', () => {
  test('fileyaml', () => {
    const filepath1 = getFixturePath('file1.yaml');
    const filepath2 = getFixturePath('file2.yaml');
    const resultname = getFixturePath('expectedPlain.txt');
    const result = readFileSync(resultname, 'utf8');
    expect(gendiff(filepath1, filepath2, 'plain')).toEqual(result);
  });
});

describe('Errors Tests', () => {
  test('Unsopported Type', () => {
    const filepath1 = getFixturePath('file1.yaml');
    const filepath2 = getFixturePath('file2.yaml');
    const badpath1 = getFixturePath('file1.txt');
    const badpath2 = getFixturePath('file2.txt');
    const extErr = new Error('Unsupported file extention (.txt)! [Supported: .json, .yml, .yaml]');
    expect(() => gendiff(filepath1, badpath2)).toThrow(extErr);
    expect(() => gendiff(badpath1, filepath2)).toThrow(extErr);
  });
});
