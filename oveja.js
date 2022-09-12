//https://adventjs.dev/challenges/01
const ovejas = [
  { name: 'Noa', color: 'azul' },
  { name: 'Euge', color: 'rojo' },
  { name: 'Navidad', color: 'rojo' },
  { name: 'Ki Na Ma', color: 'rojo'},
  { name: 'AAAAAaaaaa', color: 'rojo' },
  { name: 'Nnnnnnnn', color: 'rojo'}
]

export default function contarOvejas(ovejas) {
  // aquí tu magia
  let expresionA = /[a+]/gi;
  let expresionB = /[n+]/gi;
  return ovejas.filter(oveja => oveja.color === 'rojo' 
                       && oveja.name.match(expresionA) 
                       && oveja.name.match(expresionB) )
}

contarOvejas(ovejas)