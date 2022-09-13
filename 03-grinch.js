//https://adventjs.dev/challenges/03
isValid("bici coche (balón) bici coche peluche"); // -> ✅
isValid("(muñeca) consola bici"); // ✅

isValid("bici coche (balón bici coche"); // -> ❌
isValid("peluche (bici [coche) bici coche balón"); // -> ❌
isValid("(peluche {) bici"); // -> ❌
isValid("() bici"); // ❌
isValid("(a() bici (a)"); // ❌

export default function isValid(letter) {
  // ¡No dejes que el Grinch gane!
  let posibleGifts = letter.split("(");
  let expresion = /[\{\}\[\]]/gm;
  if (posibleGifts.some((item) => item.match(expresion))) return false;
  if (posibleGifts.some((item) => item.indexOf(")") === 0)) return false;

  return posibleGifts.some((item) => item.includes(")"));
}