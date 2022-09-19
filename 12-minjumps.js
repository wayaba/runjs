//https://adventjs.dev/challenges/12

getMinJump([5, 3, 6, 7, 9]); // -> 4

// S es salto, X es obstáculo
/* Así quedaría la representación:
0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10
.  .  .  X  .  X  X  X  .  X  . 
S-----------S-----------S-------
*/

getMinJump([2, 4, 6, 8, 10]); // -> 7

/* Así quedaría la representación:
0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10
.  .  X  .  X  .  X  .  X  .  X 
S--------------------S---------

// Longitudes de salto:
// 1 caería en el 2
// 2 caería en el 2
// 3 caería en el 6
// 4 caería en el 4
// 5 caería en el 10
// 6 caería en el 6
// 7 es el ideal!!! ✅
*/

getMinJump([1, 2, 3, 5]); // -> 4
getMinJump([3, 7, 5]); // -> 2
getMinJump([9, 5, 1]); // -> 2

export default function getMinJump(obstacles) {
  // ¡No olvides compartir tu solución en redes!

  obstacles.sort((a, b) => a - b);

  const max = Math.max(...obstacles);
  let minJump = 0;
  for (let index = 2; index <= max; index++) {
    //si no hay multiplo del numero, esa es la cantidad de saltos
    if (obstacles.every((item) => item % index !== 0)) {
      minJump = index;
      break;
    }
  }

  return minJump;
}