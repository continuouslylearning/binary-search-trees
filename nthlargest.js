function nthLargest(node, n){
  const state = { count: 0, result: null };
  nthLargestHelper(node, n, state);
  return state.result;
}

function nthLargestHelper(node, n, state){
  if(!node) return;

  // reverse in-order traversal
  nthLargestHelper(node.right, n, state);
  if(state.result) return;
  state.count++;
  if(state.count === n) state.result = { key: node.key, value: node.value };
  nthLargestHelper(node.left, n, state);
}

module.exports = nthLargest;
