const BST_Example = {
  nodes: [
    { id: "10", left: "5", right: "15", value: 10 },
    { id: "15", left: "13", right: "22", value: 15 },
    { id: "22", left: null, right: null, value: 22 },
    { id: "13", left: null, right: "14", value: 13 },
    { id: "14", left: null, right: null, value: 14 },
    { id: "5", left: "2", right: "5-2", value: 5 },
    { id: "5-2", left: null, right: null, value: 5 },
    { id: "2", left: "1", right: null, value: 2 },
    { id: "1", left: null, right: null, value: 1 },
  ],
  root: "10",
};
const target = 12;

function findClosestValueInBst(tree, target) {
  let currentNode = tree;
  let closestValue = tree.value;

  while (currentNode) {
    if (currentNode.value === target) {
      return target;
    }

    const shouldReplaceValue =
      Math.abs(currentNode.value - target) < Math.abs(closestValue - target);
    if (shouldReplaceValue) {
      closestValue = currentNode.value;
    }

    // go left
    if (currentNode.value > target) {
      currentNode = currentNode.left;
    }

    // go right
    else {
      currentNode = currentNode.right;
    }
  }
  return closestValue;
}

// This is the class of the input tree. Do not edit.
class BST {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

// Do not edit the line below.
exports.findClosestValueInBst = findClosestValueInBst;
