//https://adventjs.dev/challenges/18

export default function fixFiles(files) {
  // ¡No olvides compartir tu solución en redes!
  let aux = [];
  let countElements = {};
  files.forEach((item, index) => {
    let element = item
    if (countElements[item]) {
      countElements[item] += 1;
      element += `(${countElements[item]-1})`
    } else {
      countElements[item] = 1;
    }
    aux[index] = element;
  });
 
  return aux;
}

const files = ["photo", "postcard", "photo", "photo", "video"];
fixFiles(files); // ['photo', 'postcard', 'photo(1)', 'photo(2)', 'video']

const files2 = ["file", "file", "file", "game", "game"];
fixFiles(files2); // ['file', 'file(1)', 'file(2)', 'game', 'game(1)']

// ojo que los elfos ya tenían archivos con (1)... ¡y pueden estar repetidos!
const files3 = ["file", "file(1)", "icon", "icon(1)", "icon(1)"];
fixFiles(files3); // ['file', 'file(1)', 'icon', 'icon(1)', 'icon(1)(1)']
