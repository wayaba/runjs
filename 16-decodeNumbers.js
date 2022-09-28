//https://adventjs.dev/challenges/16

export default function decodeNumbers(symbols) {
 // ¡No olvides compartir tu solución en redes!
  if (symbols === undefined) throw new Error('must have parameter')
  if (typeof symbols !== 'string') throw new Error('parameter must be string')

  const symbolsMapping = { '.': 1, ',': 5, ':': 10, ';': 50, '!': 100 }

  return symbols.split('').reduce((prevValue, currentValue, index, array) => {
    const value = symbolsMapping[array[index]]
    const nextValue =
      array[index + 1] !== undefined ? symbolsMapping[array[index + 1]] : 0

    return value < nextValue
      ? prevValue - symbolsMapping[currentValue]
      : prevValue + symbolsMapping[currentValue]
  }, 0)
}

decodeNumbers('...') // 3
decodeNumbers('.,') // 4 (5 - 1)
decodeNumbers(',.') // 6 (5 + 1)
decodeNumbers(',...') // 8 (5 + 3)
decodeNumbers('.........!') // 107 (1 + 1 + 1 + 1 + 1 + 1 + 1 - 1 + 100)
decodeNumbers('.;') // 49 (50 - 1)
decodeNumbers('..,') // 5 (-1 + 1 + 5)
decodeNumbers('..,!') // 95 (1 - 1 - 5 + 100)
decodeNumbers('.;!') // 49 (-1 -50 + 100)
decodeNumbers('!!!') // 300
decodeNumbers(';!') // 50
decodeNumbers(';.W') // NaN

