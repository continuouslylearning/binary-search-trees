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
}

