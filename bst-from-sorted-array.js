const isBalanced = require('./balanced');
const isBST = require('./is-bst');
const heightOfBST = require('./height');

class Node {
  constructor(key){
    this.key = key;
    this.left = null;
    this.right = null;
  }
}

// create BST from a sorted array
function createBST(arr, lo = null, hi = null){
  if(lo === null) lo = 0;
  if(hi === null) hi = arr.length - 1;

  if(lo > hi) return null;

  const mid = Math.floor(lo + (hi - lo)/2);
  const key = arr[mid];
  const node = new Node(key);

  node.left = createBST(arr, lo, mid -1);
  node.right = createBST(arr, mid + 1, hi);

  return node;
}

if(require.main = module){
  const arr = [ 3, 5, 7, 9, 11, 13, 15 ];
  const bst = createBST(arr);
  console.log(bst);
  console.log('Tree is balanced:', isBalanced(bst));
  console.log('Tree is a bst:', isBST(bst));
  console.log('height of the tree is:', heightOfBST(bst));
}
