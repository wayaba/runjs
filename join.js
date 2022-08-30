

const leftArray = [
  {id:1, name:"pepe", age: 31},
  {id:2, name:"juan", age: 30},
  {id:3, name:"ana", age: 35},
  {id:4, name:"luisa", age: 29},
]

const rightArray = [
  {id:10, name:"pepe", email: "pepe@gmail.com"},
  {id:20, name:"roberto", email: "roberto@gmail.com"},
  {id:30, name:"natalia", email: "nati@gmail.com"},
  {id:40, name:"luisa", email: "luisa@gmail.com"},
]


function join(left:Array, right:Array, key:String){
  let result = []
  const item = new Map()
  left.forEach((itemLeft) => { item.set(itemLeft[key], itemLeft) })
  
  right.forEach((itemRight)=>{
    let current = item.get(itemRight[key])
    
  	if(current !== undefined)
      result.push({...itemRight, ...current })
  })
  return result
}

console.log(join(leftArray, rightArray, "name"))