const { challenge02 } = require('../index')
const { largeInput } = require('../largeInput')

describe('Compiler test', () => {
  test('##*& to be 4', () => {
    expect(challenge02('##*&')).toBe('4')
  })

  test('&##&*&@& to be 0243', () => {
    expect(challenge02('&##&*&@&')).toBe('0243')
  })

  test('LargeInput to be 024899455', () => {
    expect(challenge02(largeInput)).toBe('024899455')
  })

  test('Throw error passing unexpected char', () => {
    expect(() => {
      challenge02('&##%&')
    }).toThrow('Invalid operation')
  })
})
