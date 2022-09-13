//https://adventjs.dev/challenges/06

sumPairs([3, 5, 7, 2], 10); // [3, 7]
sumPairs([-3, -2, 7, -5], 10); // null
sumPairs([2, 2, 3, 1], 4); // [2, 2]
sumPairs([6, 7, 1, 2], 8); // [6, 2]
sumPairs([0, 2, 2, 3, -1, 1, 5], 6); // [1, 5]

export default function sumPairs(numbers, result) {
  // ¡Y no olvides compartir tu solución en redes!

  let sumPairsResult = null;

  numbers.some((number, index) => {
    numbers.slice(index + 1).some((secondNumber) => {
      if (secondNumber + number == result) {
        sumPairsResult = [number, secondNumber];
        return true;
      }
    });
    if (sumPairsResult) return true;
  });
  return sumPairsResult;
}