const errorVal = Number.MIN_VALUE;

function isBalanced(node){
  return isBalancedHelper(node) !== errorVal;
}

function isBalancedHelper(node){
  if(!node) return -1;

  const leftHeight = isBalancedHelper(node.left);
  if(leftHeight === errorVal) return errorVal;
  const rightHeight = isBalancedHelper(node.right);
  if(rightHeight === errorVal) return errorVal;

  const heightDiff = Math.abs(leftHeight - rightHeight);
  if(heightDiff > 1) return errorVal;

  return Math.max(leftHeight, rightHeight) + 1;
}

module.exports = isBalanced;