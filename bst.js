const Node = require('./node');

class BST {

  constructor(){
    this.root = null;
  }

  put(key, value){
    this.root = this.putHelper(key, value, this.root);
  }

  putHelper(key, value, node){
    if(!node) return new Node(key, value);

    if(key < node.key) node.left = this.putHelper(key, value, node.left);
    else if(key > node.key) node.right = this.putHelper(key, value, node.right);
    else node.value = value;

    return node;
  }

  get(key){
    return this.getHelper(key, this.root);
  }

  getHelper(key, node){
    if(!node) return null;

    if(key < node.key) return this.getHelper(key, node.left);
    else if(key > node.key) return this.getHelper(key, node.right);
    else return node.value;
  }

  remove(key){
    this.root = this.removeHelper(key, this.root);
  }

  removeHelper(key, node){
    if(!node) return;

    if(key < node.key) node.left = this.removeHelper(key, node.left);
    else if(key > node.key) node.right = this.removeHelper(key, node.right);
    else if(!node.left) return node.right;
    else if(!node.right) return node.left;
    else {
      const successor = this.min(node.right);
      const removedNode = node;
      successor.left = removedNode.left;
      successor.right = this.removeMin(removedNode.right);
      node = successor;
    }
    
    return node;
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

  console.log('\nDeleting keys from BST');
  [1, 2, 3, 9 ].forEach(num => bst.remove(num));
  bst.print();
}