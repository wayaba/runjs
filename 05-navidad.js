//https://adventjs.dev/challenges/05

const date1 = new Date("Dec 1, 2021");
daysToXmas(date1); // 24
const date2 = new Date("Dec 24, 2021 00:00:01");
daysToXmas(date2); // 1
const date3 = new Date("Dec 24, 2021 23:59:59");
daysToXmas(date3); // 1
const date4 = new Date("December 20, 2021 03:24:00");
daysToXmas(date4); // 5

export default function daysToXmas(date) {
  // ¡Y no olvides compartir tu solución en redes!
  const dateXmas = new Date("Dec 25, 2021");

  let differenceInTime = dateXmas.getTime() - date.getTime();

  // To calculate the no. of days between two dates
  let differenceInDays = differenceInTime / (1000 * 3600 * 24);

  return Math.ceil(differenceInDays);
}