//https://adventjs.dev/challenges/24

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


const tree11 = {
  value: 1,
  left: { value: 2, left: null, right: null },
  right: { value: 3, left: null, right: null },
};
const tree22 = {
  value: 1,
  left: { value: 2, left: null, right: null },
  right: { value: 3, left: null, right: null },
};
checkIsSameTree(tree11, tree11); // true

export default function checkIsSameTree(treeA, treeB) {
  // ¡No olvides compartir tu solución en redes!

  const validate = (a, b) => {
    if (typeof a !== typeof b) return false;
    if (a !== null && typeof a === "object") {
      let value = validate(a.value, b.value);
      let left = validate(a.left, b.left);
      let right = validate(a.right, b.right);
      return value && left && right;
    } else {
      return a === b;
    }
  };

  return validate(treeA, treeB);
}