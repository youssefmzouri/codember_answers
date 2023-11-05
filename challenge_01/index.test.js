const { challenge01 } = require('./challenge_01')

describe('Count words different size', () => {
  test('Short sentence 1', () => {
    const sentence = 'gato perro perro coche Gato peRRo sol'
    const result = 'gato2perro3coche1sol1'
    expect(challenge01(sentence)).toBe(result)
  })

  test('Short sentence 2', () => {
    const sentence = 'llaveS casa CASA casa llaves'
    const result = 'llaves2casa3'
    expect(challenge01(sentence)).toBe(result)
  })

  test('Short sentence 3', () => {
    const sentence = 'taza ta za taza'
    const result = 'taza2ta1za1'
    expect(challenge01(sentence)).toBe(result)
  })

  test('Short sentence 4', () => {
    const sentence = 'casas casa casasas'
    const result = 'casas1casa1casasas1'
    expect(challenge01(sentence)).toBe(result)
  })
})
