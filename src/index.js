import { readFileSync } from 'fs';
import { resolve } from 'path';
import _ from 'lodash';

const getAbsolutePath = (filepath) => resolve(process.cwd(), filepath);
const parseFile = (filepath) => JSON.parse(readFileSync(getAbsolutePath(filepath), 'utf-8'));

const buildDiff = (data1, data2) => {
  const keys = _.sortBy(_.union(_.keys(data1), _.keys(data2)));

  return keys.map((key) => {
    if (!_.has(data2, key)) {
      return `  - ${key}: ${data1[key]}`;
    }
    if (!_.has(data1, key)) {
      return `  + ${key}: ${data2[key]}`;
    }
    if (data1[key] !== data2[key]) {
      return [
        `  - ${key}: ${data1[key]}`,
        `  + ${key}: ${data2[key]}`
      ].join('\n');
    }
    return `    ${key}: ${data1[key]}`;
  }).join('\n');
};

export default function genDiff(filepath1, filepath2) {
  const data1 = parseFile(filepath1);
  const data2 = parseFile(filepath2);
  const diff = buildDiff(data1, data2);
  return `{\n${diff}\n}`;
}