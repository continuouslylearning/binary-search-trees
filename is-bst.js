function isBST(node, min = null, max = null){
  if(!node) return true;
  if((min && node.key < min) || (max && node.key > max)) return false;
  return isBST(node.left, min, node.key) && isBST(node.right, node.key, max);
}

module.exports = isBST;