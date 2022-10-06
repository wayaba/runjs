//https://adventjs.dev/challenges/25

const room = [
  [" ", " ", " "],
  [" ", " ", "m"],
  [" ", " ", "*"],
];

canMouseEat("up", room); // false
canMouseEat("down", room); // true
canMouseEat("right", room); // false
canMouseEat("left", room); // false

const room2 = [
  ["*", " ", " ", " ", " "],
  [" ", "m", "*", " "],
  [" ", " ", " ", " "],
  [" ", " ", " ", "*"],
];

canMouseEat("up", room2); // false
canMouseEat("down", room2); // false
canMouseEat("right", room2); // true
canMouseEat("left", room2); // false


const room3 = [["*", "m"]];

canMouseEat("down", room3); // false


const tests = [
  { direction: 'up', game: [[" ", " ", " "], [" ", " ", "m"], [" ", " ", "*"]], expected: false },
  
  { direction: 'down', game: [[" ", " ", " "], [" ", " ", "m"], [" ", " ", "*"]], expected: true },
  
  { direction: 'right', game: [[" ", " ", " "], [" ", " ", "m"], [" ", " ", "*"]], expected: false },
  { direction: 'left', game: [[" ", " ", " "], [" ", " ", "m"], [" ", " ", "*"]], expected: false },

  { direction: 'up', game: [["*", " ", " ", " "], [" ", "m", "*", " "], [" ", " ", " ", " "], [" ", " ", " ", "*"]], expected: false },
  { direction: 'down', game: [["*", " ", " ", " "], [" ", "m", "*", " "], [" ", " ", " ", " "], [" ", " ", " ", "*"]], expected: false },
  { direction: 'right', game: [["*", " ", " ", " "], [" ", "m", "*", " "], [" ", " ", " ", " "], [" ", " ", " ", "*"]], expected: true },
  { direction: 'left', game: [["*", " ", " ", " "], [" ", "m", "*", " "], [" ", " ", " ", " "], [" ", " ", " ", "*"]], expected: false },

  { direction: 'up', game: [["*", "m"]], expected: false },
  { direction: 'down', game: [["*", "m"]], expected: false },
  { direction: 'right', game: [["*", "m"]], expected: false },
  { direction: 'left', game: [["*", "m"]], expected: true },

  { direction: 'up', game: [["*", "*", "*"], ["*", "m", "*"], ["*", "*", "*"]], expected: true },
  { direction: 'down', game: [["*", "*", "*"], ["*", "m", "*"], ["*", "*", "*"]], expected: true },
  { direction: 'right', game: [["*", "*", "*"], ["*", "m", "*"], ["*", "*", "*"]], expected: true },
  { direction: 'left', game: [["*", "*", "*"], ["*", "m", "*"], ["*", "*", "*"]], expected: true },

  { direction: 'up', game: [[" ", " ", " "], [" ", "m", " "], [" ", " ", " "]], expected: false },
  { direction: 'down', game: [[" ", " ", " "], [" ", "m", " "], [" ", " ", " "]], expected: false },
  { direction: 'right', game: [[" ", " ", " "], [" ", "m", " "], [" ", " ", " "]], expected: false },
  { direction: 'left', game: [[" ", " ", " "], [" ", "m", " "], [" ", " ", " "]], expected: false },

];

tests.forEach(e => {
  const result = canMouseEat(e.direction, e.game)
  console.log('e.treeA :>> ', e.direction, '\n> e.treeB :', e.game)
  console.log('> Expected:', e.expected, '\n> Result:', result)
  console.log(`Test Passed: ${(e.expected === result) ? 'True :)' : 'False !!!'}`, '\n ')
});

export default function canMouseEat(direction, game) {
  // ¡Gracias por jugar a AdventJS 2021! 🤗
  // ¡Nos vemos el año que viene! 👋
  // Por favor, comparte en las redes qué te ha parecido! 🚀

  let indexX = game.findIndex((x) => x.find((e) => e === "m"));
  let indexY = game[indexX].findIndex((x) => x === "m");

  if (indexX === null || indexY === null) return false;

  let directionMap = {
    up: { row: indexX - 1, col: indexY },
    down: { row: indexX + 1, col: indexY },
    left: { row: indexX, col: indexY - 1 },
    right: { row: indexX, col: indexY + 1 },
  };

  if (game[directionMap[direction].row] === undefined || game[directionMap[direction].col] === undefined)
    return false;
  return game[directionMap[direction].row][directionMap[direction].col] == "*";
}
