const operations = {
  '#': (acc, output) => [acc + 1, output],
  '@': (acc, output) => [acc - 1, output],
  '*': (acc, output) => [acc * acc, output],
  '&': (acc, output) => [acc, output.concat(acc.toString())]
}

const challenge02 = (input) => {
  let [acc, output] = [0, '']
  for (const op of input) {
    const validOperations = Object.keys(operations)
    if (!validOperations.includes(op)) throw new Error('Invalid operation');
    [acc, output] = operations[op](acc, output)
  }
  return output
}

module.exports = { challenge02 }
