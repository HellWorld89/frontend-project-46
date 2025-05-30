import { readFileSync } from 'fs'
import { resolve } from 'path'
import parse from './src/parsers.js'
import buildDiff from './src/buildDiff.js'
import getFormatter from './src/formatters/index.js'

const getAbsolutePath = filepath => resolve(process.cwd(), filepath)

export default (filepath1, filepath2, formatName = 'stylish') => {
  const content1 = readFileSync(getAbsolutePath(filepath1), 'utf-8')
  const content2 = readFileSync(getAbsolutePath(filepath2), 'utf-8')

  const data1 = parse(filepath1, content1)
  const data2 = parse(filepath2, content2)

  const diff = buildDiff(data1, data2)
  const format = getFormatter(formatName)

  return format(diff)
}
