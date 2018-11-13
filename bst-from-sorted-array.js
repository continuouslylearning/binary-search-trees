const isBalanced = require('./balanced');
const isBST = require('./is-bst');
const heightOfBST = require('./height');
const createListOfDepths = require('./depths');

class Node {
  constructor(key){
    this.key = key;
    this.left = null;
    this.right = null;
  }
}

// create BST from a sorted array
function createBST(arr, lo = 0, hi = arr.length - 1){
  if(lo > hi) return null;

  const mid = Math.floor(lo + (hi - lo)/2);
  const key = arr[mid];
  const node = new Node(key);

  node.left = createBST(arr, lo, mid -1);
  node.right = createBST(arr, mid + 1, hi);

  return node;
}

if(require.main === module){
  const arr = [ 3, 5, 7, 9, 11, 13, 15 ];
  const bst = createBST(arr);
  console.log('Tree is balanced:', isBalanced(bst));
  console.log('Tree is a bst:', isBST(bst));
  console.log('Height of the tree is:', heightOfBST(bst));
  createListOfDepths(bst);
}
