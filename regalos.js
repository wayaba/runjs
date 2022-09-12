//https://adventjs.dev/challenges/02
const carta = "bici coche balón  _playstation bici coche peluche";

const regalos = listGifts(carta);

console.log(regalos);
/*
{
  bici: 2,
  coche: 2,
  balón: 1,
  peluche: 1
}
*/

export default function listGifts(letter) {
  // ¡Tú puedes!
  let letterWithSingleSpace = letter.trim().replace(/\s{2,}/g, " ");
  let cleanLetter = {}
  
  letterWithSingleSpace.split(" ").filter(item => !item.includes("_")).forEach(item => {
    if(cleanLetter[item])
      cleanLetter[item] += 1
    else
      cleanLetter[item] = 1
  })
  return cleanLetter
}