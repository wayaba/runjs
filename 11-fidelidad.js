//https://adventjs.dev/challenges/11

// Entrada normal: 12$ * 3 = 36$
// Tarjeta fidelidad: 250$ + (12$ * 0,75) +  (12$ * 0,75 * 0,75) + (12$ * 0,75 * 0,75 * 0,75) = 270,8125$

shouldBuyFidelity(3); // false -> Mejor comprar tickets de un sólo uso
shouldBuyFidelity(100); // true -> Mejor comprar tarjeta fidelidad

export default function shouldBuyFidelity(times) {
  // ¡No olvides compartir tu solución en redes!
  const fidelityCost = 250;
  const noFidelityCost = 12;

  let totalWithFidelity = fidelityCost;
  for (let i = 0; i < times; i++) {
    totalWithFidelity =
      totalWithFidelity + noFidelityCost * Math.pow(0.75, i + 1);
  }
  return totalWithFidelity < times * noFidelityCost;
}