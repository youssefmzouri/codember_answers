const { largeText } = require('./largeText')

function challenge01 (sentence) {
  const listOfWords = sentence.toLowerCase().split(' ')

  const ocurrenciesWords = {}
  listOfWords.forEach(word => {
    const ocurrencies = listOfWords.filter(w => w === word)
    ocurrenciesWords[word] = ocurrencies.length
  })

  const entries = Object.entries(ocurrenciesWords)

  let finalSentence = ''
  entries.forEach(entrie => {
    finalSentence = finalSentence + entrie.join('')
  })

  console.log(finalSentence)
  return finalSentence
}
challenge01(largeText)

module.exports = { challenge01 }
