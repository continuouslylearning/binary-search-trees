const Node = require('./node');
const isBST = require('./is-bst');
const heightOfBST = require('./height');
const isBalanced = require('./balanced');
const nthLargest = require('./nthlargest');

class BST {
  constructor(){
    this.root = null;
  }

  put(key, value){
    this.root = this.putHelper(key, value, this.root);
  }

  putHelper(key, value, node = this.root){
    if(!node) return new Node(key, value);

    if(key < node.key) node.left = this.putHelper(key, value, node.left);
    else if(key > node.key) node.right = this.putHelper(key, value, node.right);  
    else node.value = value;

    return node;
  }

  get(key, value){
    return this.getHelper(key, value, this.root);
  }

  getHelper(key, value, node){
    if(!node) return null;

    if(key < node.key) return this.getHelper(key, value, node.left);
    else if(key > node.key) return this.getHelper(key, value, node.right);
    else return node.value;
  }

  remove(key){
    this.root = this.removeHelper(key, this.root);
  }

  removeHelper(key, node){
    if(!node) return;

    if(key === node.key){
      if(!node.left) return node.right;
      else if(!node.right) return node.left;

      const successor = this.min(node.right);
      const removedNode = node;
      // only assign left child to successor AFTER right child
      successor.right = this.removeMin(removedNode.right);
      successor.left = removedNode.left;
      return successor;
    }

    if(key < node.key) node.left = this.removeHelper(key, node.left); 
    else node.right = this.removeHelper(key, node.right);

    return node;
  }

  removeMin(node){
    if(!node.left) {
      return node.right;
    } else {
      node.left = this.removeMin(node.left);
      return node;
    }
  }

  min(node){
    if(!node.left) return node;
    return this.min(node.left);
  }

  print(node = this.root){
    if(!node) return;
    this.print(node.left);
    console.log(`${node.key}: ${node.value}`);
    this.print(node.right);
  }
}

if(require.main === module){

  const bst = new BST();
  const input = [3, 1, 4, 6, 9, 2, 5, 7];

  input.forEach(num => {
    bst.put(num, num);
  }); 
  bst.print();
  
  console.log(`\`bst\` is a binary search tree:`, isBST(bst.root));
  console.log(`The height of \`bst\` is:`, heightOfBST(bst.root));
  console.log(`\`bst\` is balanced:`, isBalanced(bst.root));
  console.log(`The key-value pair with third largest key in \`bst\` is:`, nthLargest(bst.root, 3));

  console.log('\nDeleting keys from BST');
  [1, 2, 3, 9, 4, 6].forEach(num => bst.remove(num));
  bst.print();
  console.log(`\`bst\` is a binary search tree after deletions:`, isBST(bst.root));
  console.log(`The height of \`bst\` after deletions is:`, heightOfBST(bst.root));
  console.log(`\`bst\` is balanced after deletions:`, isBalanced(bst.root));
  console.log(`The key-value pair with third largest key in \`bst\` after deletions is:`, nthLargest(bst.root, 3));
}