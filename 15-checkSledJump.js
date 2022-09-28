//https://adventjs.dev/challenges/15

checkSledJump([1, 2, 3, 2, 1]) // true: sube y baja de forma estricta
checkSledJump([0, 1, 0]) // -> true: sube y baja de forma estricta
checkSledJump([0, 3, 2, 1]) // -> true: sube y baja de forma estricta
checkSledJump([0, 1000, 1]) // -> true: sube y baja de forma estricta

checkSledJump([2, 4, 4, 6, 2]) // false: no sube de forma estricta
checkSledJump([1, 2, 3]) // false: sólo sube
checkSledJump([1, 2, 3, 2, 1, 2, 3]) // false: sube y baja y sube... ¡no vale!

export default function checkSledJump(heights) {
  // ¡No olvides compartir tu solución en redes!
if (!Array.isArray(heights)) throw new Error('Param must be array')

  if (
    !heights.every((id) => {
      return typeof id === 'number'
    })
  ) {
    throw new Error('Array must contain just numbers')
  }

  if (heights.length < 3) {
    throw new Error('Array must contain at least 3 numbers')
  }

  let currentValue = -1
  let firstDecrementalIndex = null
  heights.every((value, index) => {
    if (value > currentValue) {
      currentValue = value
    } else {
      firstDecrementalIndex = index
      return false
    }
    return true
  })

  let isSecuencial = true
  heights.slice(firstDecrementalIndex).every((value, index) => {
    if (value < currentValue) {
      currentValue = value
    } else {
      isSecuencial = false
    }
    return isSecuencial
  })

  return isSecuencial
}