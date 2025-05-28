import { readFileSync } from 'fs';
import { resolve } from 'path';
import genDiff from '../src/index.js';

const getFixturePath = (filename) => resolve(__dirname, '..', '__fixtures__', filename);
const readFile = (filename) => readFileSync(getFixturePath(filename), 'utf-8');

test('compare flat JSON files', () => {
  const file1 = getFixturePath('file1.json');
  const file2 = getFixturePath('file2.json');
  const expected = readFile('expected_result.txt');
  expect(genDiff(file1, file2)).toBe(expected);
});
