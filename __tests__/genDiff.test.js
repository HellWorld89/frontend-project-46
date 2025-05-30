import { readFileSync } from 'fs';
import { resolve } from 'path';
import genDiff from '../src/index.js';

const getFixturePath = (filename) => resolve(__dirname, '..', '__fixtures__', filename);
const readFile = (filename) => readFileSync(getFixturePath(filename), 'utf-8');

describe('genDiff', () => {
  const expectedStylish = readFile('expected_stylish.txt');

  test('JSON comparison', () => {
    const file1 = getFixturePath('file1.json');
    const file2 = getFixturePath('file2.json');
    expect(genDiff(file1, file2)).toBe(expectedStylish);
  });

  test('YAML comparison', () => {
    const file1 = getFixturePath('file1.yml');
    const file2 = getFixturePath('file2.yml');
    expect(genDiff(file1, file2)).toBe(expectedStylish);
  });
});