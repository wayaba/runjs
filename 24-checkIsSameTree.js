//https://adventjs.dev/challenges/24
/*
const tree = {
  value: null,
  left: { value: 2, left: null, right: null },
  right: { value: 3, left: null, right: null }
}

checkIsSameTree(tree, tree) // true

const tree2 = {
  value: 1,
  left: { value: 3, left: { value: 2, left: null, right: null }, right: null },
  right: { value: 5, left: null, right: { value: 4, left: null, right: null } }
}

checkIsSameTree(tree, tree2) // false
checkIsSameTree(tree2, tree2) // true

 const tree3 = {
      value: 1,
      left: { value: 3, left: { value: 2, left: null, right: null }, right: null },
      right: { value: 5, left: null, right: { value: 4, left: null, right: null } }
    }

 const tree4 = {
      value: 1,
      left: { value: 3, left: { value: 2, left: null, right: null }, right: null },
      right: { value: 5, left: null, right: { value: 4, left: null, right: null } }
    }
 
checkIsSameTree(tree3, tree4) // true
*/

 

const tests = [
  {
    treeA: {
      value: 1,
      left: { value: 2, left: null, right: null },
      right: { value: 3, left: null, right: null }
    }, treeB: {
      value: 1,
      left: { value: 2, left: null, right: null },
      right: { value: 3, left: null, right: null }
    }, expected: true
  },
  {
    treeA: {
      value: 1,
      left: { value: 3, left: { value: 2, left: null, right: null }, right: null },
      right: { value: 5, left: null, right: { value: 4, left: null, right: null } }
    }, treeB: {
      value: 1,
      left: { value: 3, left: { value: 2, left: null, right: null }, right: null },
      right: { value: 5, left: null, right: { value: 4, left: null, right: null } }
    }, expected: true
  },
  {
    treeA: {
      value: 1,
      left: { value: 3, left: { value: 2, left: null, right: null }, right: null },
      right: { value: 5, left: null, right: { value: 4, left: null, right: null } }
    }, treeB: {
      value: 1,
      left: { value: 3, left: { value: 2, left: null, right: null }, right: null },
      right: { value: 5, left: null, right: { value: 4, left: null, right: null } }
    }, expected: false
  }
]
tests.forEach(e => {
  const result = checkIsSameTree(e.treeA, e.treeB)
  console.log('e.treeA :>> ', e.treeA, '\n> e.treeB :', e.treeB)
  console.log('> Expected:', e.expected, '\n> Result:', result)
  console.log(`Test Passed: ${(e.expected === result) ? 'True :)' : 'False !!!'}`, '\n ')
});


const tree11= {
      value: 1,
      left: { value: 2, left: null, right: null },
      right: { value: 3, left: null, right: null }
    }
 const tree22 = {
      value: 1,
      left: { value: 2, left: null, right: null },
      right: { value: 3, left: null, right: null }
 }
 checkIsSameTree(tree11, tree11) // true

export default function checkIsSameTree(treeA, treeB) {
 // ¡No olvides compartir tu solución en redes!
  
  const validate = (a, b) =>{
    return Object.keys(a).every(key=>{
      if(a[key] === null || a[key] === undefined) return true
      if(typeof a[key] === 'object') 
        validate(a[key],b[key]) 
      else{
        if(a[key] !== b[key]) return false
      }
      
      return true
    })
  }
  
  return validate(treeA,treeB);
}