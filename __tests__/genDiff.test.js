// __tests__/genDiff.test.js
import { readFileSync } from 'fs'
import { resolve } from 'path'
import genDiff from '../index.js'

const getFixturePath = (filename) => resolve(__dirname, '..', '__fixtures__', filename)
const readFile = (filename) => readFileSync(getFixturePath(filename), 'utf-8')

describe('genDiff', () => {
  const expectedStylish = readFile('expected_stylish.txt')
  const expectedPlain = readFile('expected_plain.txt')
  const expectedJson = readFile('expected_json.txt')

  test('JSON comparison (stylish)', () => {
    const file1 = getFixturePath('file1.json')
    const file2 = getFixturePath('file2.json')
    expect(genDiff(file1, file2)).toBe(expectedStylish)
  })

  test('YAML comparison (stylish)', () => {
    const file1 = getFixturePath('file1.yml')
    const file2 = getFixturePath('file2.yml')
    expect(genDiff(file1, file2)).toBe(expectedStylish)
  })

  test('JSON comparison (plain)', () => {
    const file1 = getFixturePath('file1.json')
    const file2 = getFixturePath('file2.json')
    expect(genDiff(file1, file2, 'plain')).toBe(expectedPlain)
  })

  test('YAML comparison (plain)', () => {
    const file1 = getFixturePath('file1.yml')
    const file2 = getFixturePath('file2.yml')
    expect(genDiff(file1, file2, 'plain')).toBe(expectedPlain)
  })

  test('JSON comparison (json)', () => {
    const file1 = getFixturePath('file1.json')
    const file2 = getFixturePath('file2.json')
    expect(genDiff(file1, file2, 'json')).toBe(expectedJson)
  })

  test('YAML comparison (json)', () => {
    const file1 = getFixturePath('file1.yml')
    const file2 = getFixturePath('file2.yml')
    expect(genDiff(file1, file2, 'json')).toBe(expectedJson)
  })
})
