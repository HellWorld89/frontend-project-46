import { readFileSync } from 'fs';
import { resolve, extname } from 'path';

const getAbsolutePath = (filepath) => resolve(process.cwd(), filepath);
const getFileExtension = (filepath) => extname(filepath).slice(1);

const parsers = {
  json: (content) => JSON.parse(content),
};

export default function genDiff(filepath1, filepath2, format = 'stylish') {
  
  const absolutePath1 = getAbsolutePath(filepath1);
  const content1 = readFileSync(absolutePath1, 'utf-8');
  const extension1 = getFileExtension(filepath1);
  const data1 = parsers[extension1](content1);

  const absolutePath2 = getAbsolutePath(filepath2);
  const content2 = readFileSync(absolutePath2, 'utf-8');
  const extension2 = getFileExtension(filepath2);
  const data2 = parsers[extension2](content2);

  return `Comparing:\n${JSON.stringify(data1, null, 2)}\nand\n${JSON.stringify(data2, null, 2)}`;
}