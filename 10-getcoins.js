//https://adventjs.dev/challenges/10

/*
coins[0] = 1 céntimo
coins[1] = 2 céntimos
coins[2] = 5 céntimos
coins[3] = 10 céntimos
coins[4] = 20 céntimos
coins[5] = 50 céntimos
*/

getCoins(51); // [1, 0, 0, 0, 0, 1] -> una moneda de 1 céntimo y otra de 50 céntimos
getCoins(3); // [1, 1, 0, 0, 0, 0] -> una moneda de 1 céntimo y otra de 2
getCoins(5) // [0, 0, 1, 0, 0, 0] -> una moneda de 5 céntimos
getCoins(16) // [1, 0, 1, 1, 0, 0] -> una moneda de 1 céntimo, una de 5 y una de 10
getCoins(100) // [0, 0, 0, 0, 0, 2] -> dos monedas de 50 céntimos

export default function getCoins(change) {
  // ¡No olvides compartir tu solución en redes!
  let coins = [50, 20, 10, 5, 2, 1];
  let difference = change;
  let coinsOutput = [0,0,0,0,0,0];
  
  coins.forEach((item, index) => {
    let decimalPart = Math.floor(difference / item);
    difference = decimalPart > 0 ? difference - decimalPart * item : difference;
    coinsOutput[index] = decimalPart;    
  });
  
  return coinsOutput.reverse();
}