class Node {

  constructor(key, value, left = null, right = null){
    this.key = key;
    this.value = value;
    this.left = left;
    this.right = right;
  }

}

module.exports = Node;