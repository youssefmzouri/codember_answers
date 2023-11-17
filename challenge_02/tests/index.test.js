const { challenge02 } = require('../index')
const { largeInput } = require('../largeInput')

describe('Compiler test', () => {
  test('Output to be 4', () => {
    expect(challenge02('##*&')).toBe('4')
  })

  test('Output to be 0243', () => {
    expect(challenge02('&##&*&@&')).toBe('0243')
  })

  test('Output to be 024899455', () => {
    expect(challenge02(largeInput)).toBe('024899455')
  })

  test('Output to be error sending unexpected char', () => {
    expect(() => {
      challenge02('&##%&')
    }).toThrow('Invalid operation')
  })
})
