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

export default function canMouseEat(direction: String, game: Array) {
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

  return (
    game[directionMap[direction].row][directionMap[direction].col] !=
      undefined &&
    game[directionMap[direction].row][directionMap[direction].col] == "*"
  );
}
