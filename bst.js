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
}