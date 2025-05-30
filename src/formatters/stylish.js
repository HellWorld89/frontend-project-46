import _ from 'lodash'

const stringify = (value, depth) => {
  const indentSize = depth * 4
  const currentIndent = ' '.repeat(indentSize)
  const bracketIndent = ' '.repeat(indentSize - 4)

  if (!_.isObject(value) || _.isArray(value) || value === null) {
    return String(value)
  }

  const lines = Object.entries(value).map(([key, val]) => `${currentIndent}${key}: ${stringify(val, depth + 1)}`)

  return [
    '{',
    ...lines,
    `${bracketIndent}}`,
  ].join('\n')
}

const formatStylish = (diff, depth = 1) => {
  const indent = ' '.repeat(depth * 4 - 2)

  const lines = diff.map((node) => {
    const { key, type } = node

    switch (type) {
      case 'nested':
        return [
          `${indent}  ${key}: {`,
          ...formatStylish(node.children, depth + 1).split('\n'),
          `${indent}  }`,
        ].join('\n')

      case 'added':
        return `${indent}+ ${key}: ${stringify(node.value, depth + 1)}`

      case 'removed':
        return `${indent}- ${key}: ${stringify(node.value, depth + 1)}`

      case 'unchanged':
        return `${indent}  ${key}: ${stringify(node.value, depth + 1)}`

      case 'changed':
        return [
          `${indent}- ${key}: ${stringify(node.oldValue, depth + 1)}`,
          `${indent}+ ${key}: ${stringify(node.newValue, depth + 1)}`,
        ].join('\n')

      default:
        throw new Error(`Unknown node type: ${type}`)
    }
  })

  return lines.join('\n')
}

export default (diff) => `{\n${formatStylish(diff)}\n}`
