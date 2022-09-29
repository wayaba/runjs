//https://adventjs.dev/challenges/17

export default function countPackages(carriers, carrierID) {
 // ¡No olvides compartir tu solución en redes!
 
  const getTransportista = (sub, idCarrier) => {
    let transportista = sub.find(item => item[0] === idCarrier)
    let subordinados = transportista[2]
    let nroPaquetes = transportista[1]
    subordinados.forEach(item=>{
    	nroPaquetes += getTransportista(carriers, item)
  	})
    return nroPaquetes
  }
  return getTransportista(carriers, carrierID)
}

const carriers = [
  ['dapelu', 5, ['midu', 'jelowing']],
  ['midu', 2, []],
  ['jelowing', 2, []]
]

countPackages(carriers, 'dapelu') // 9
// 5 de dapelu, 2 de midu y 2 de jelowing = 9

const carriers2 = [
  ['lolivier', 8, ['camila', 'jesuspoleo']],
  ['camila', 5, ['sergiomartinez', 'conchaasensio']],
  ['jesuspoleo', 4, []],
  ['sergiomartinez', 4, []],
  ['conchaasensio', 3, ['facundocapua', 'faviola']],
  ['facundocapua', 2, []],
  ['faviola', 1, []]
]

countPackages(carriers2, 'camila') // 15
// 5 de camila, 4 de sergiomartinez, 3 de conchaasensio, 2 de facundocapua y 1 de faviola = 15