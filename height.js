function heightOfBST(node){
  if(!node) return -1;
  return Math.max(heightOfBST(node.left), heightOfBST(node.right)) + 1;
}

module.exports = heightOfBST;