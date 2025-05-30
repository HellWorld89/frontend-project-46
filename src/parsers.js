import { extname } from 'path'
import yaml from 'js-yaml'

const parseJson = content => JSON.parse(content)
const parseYaml = content => yaml.load(content)

export default (filepath, content) => {
  const extension = extname(filepath).toLowerCase()

  switch (extension) {
    case '.json':
      return parseJson(content)
    case '.yaml':
    case '.yml':
      return parseYaml(content)
    default:
      throw new Error(`Unsupported format: ${extension}`)
  }
}
