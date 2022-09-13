
//https://adventjs.dev/challenges/04
console.log(createXmasTree(10));

export default function createXmasTree(height) {
  // ¡Y no olvides también poner los turrones!
  let tree = "\n";
  let flatLineCounter = height - 1;
  let starCounter = 1
  for (let i = 0; i < height; i++) {
    let flatLine = '_'.repeat(flatLineCounter - i)
    let line = flatLine + '*'.repeat(starCounter) + flatLine
    starCounter = starCounter + 2
    tree += line +"\n";  
  }
  tree += '_'.repeat(flatLineCounter) + '#' + '_'.repeat(flatLineCounter) +"\n";
  tree += '_'.repeat(flatLineCounter) + '#' + '_'.repeat(flatLineCounter) +"\n";
  return tree;
}