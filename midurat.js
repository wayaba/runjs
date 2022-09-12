//https://adventjs.dev/challenges/25

const room = [
  [" ", " ", " "],
  [" ", " ", "m"],
  [" ", " ", "*"],
];

canMouseEat("up", room); // false
canMouseEat('down',  room)   // true
canMouseEat('right', room)   // false
canMouseEat('left',  room)   // false

const room2 = [
  ["*", " ", " ", " ", " "],
  [" ", "m", "*", " "],
  [" ", " ", " ", " "],
  [" ", " ", " ", "*"],
];

canMouseEat('up',    room2)   // false
canMouseEat('down',  room2)   // false
canMouseEat('right', room2)   // true
canMouseEat('left',  room2)   // false

export default function canMouseEat(direction, game) {
  // ¡Gracias por jugar a AdventJS 2021! 🤗
  // ¡Nos vemos el año que viene! 👋
  // Por favor, comparte en las redes qué te ha parecido! 🚀
  let objPosition = findMouse(game);
  let rowNewPosition = objPosition.row;
  let colNewPosition = objPosition.col;
  switch (direction) {
    case "up":
      rowNewPosition = rowNewPosition - 1;
      break;
    case "down":
      rowNewPosition = rowNewPosition + 1;
      break;
    case "left":
      colNewPosition = colNewPosition - 1;
      break;
    case "right":
      colNewPosition = colNewPosition + 1;
      break;
    default:
      console.log(
        "Lo lamentamos, por no existe esa direccion " + direction + "."
      );
  }
  
  return game[rowNewPosition][colNewPosition] !== undefined && game[rowNewPosition][colNewPosition] === "*";
}

export function findMouse(game) {
  let rowPosition = null;
  let colPosition = null;
  game.every((row) => {
    let index = row.findIndex((col) => col === "m");
    if (index > 0) {
      colPosition = index;
      return false;
    }
    rowPosition = rowPosition + 1;
    return true;
  });
  return {
    row: rowPosition,
    col: colPosition,
  };
}