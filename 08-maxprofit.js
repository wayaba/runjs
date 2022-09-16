//https://adventjs.dev/challenges/08

const pricesBtc = [39, 18, 29, 25, 34, 32, 5];
maxProfit(pricesBtc); // -> 16 (compra a 18, vende a 34)

const pricesEth = [10, 20, 30, 40, 50, 60, 70];
maxProfit(pricesEth); // -> 60 (compra a 10, vende a 70)

const pricesDoge = [18, 15, 12, 11, 9, 7];
maxProfit(pricesDoge); // -> -1 (no hay ganancia posible)

const pricesAda = [3, 3, 3, 3, 3];
maxProfit(pricesAda); // -> -1 (no hay ganancia posible)

export default function maxProfit(prices) {
  // ¡Y no olvides compartir tu solución en redes!

  let bestDifference = -1;
  let buyPrice = prices[0];
  let sellPrice = -1;
  prices.forEach((price, index) => {
    prices.slice(index + 1).forEach((nextPrice, nextIndex) => {
      if (price < nextPrice && price - nextPrice < bestDifference) {
        bestDifference = price - nextPrice;
        buyPrice = price;
        sellPrice = nextPrice;
      }
    });
  });

  return bestDifference < -1 ? bestDifference * -1 : bestDifference;
}