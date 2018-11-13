function createListOfDepths(node){
  const lists = [];
  createListOfDepthsHelper(node, 0, lists);
  printListOfDepths(lists);
  return lists;
}

function createListOfDepthsHelper(node, depth, lists){
  if(!node) return;

  let list;
  if(depth === lists.length){
    list = [];
    lists.push(list);
  } else list = lists[depth];
  
  list.push(node);
  createListOfDepthsHelper(node.left, depth + 1, lists);
  createListOfDepthsHelper(node.right, depth + 1, lists);
}

function printListOfDepths(lists){
  for(let i = 0; i < lists.length; i++){
    let row = '';
    for(let j = 0; j < lists[i].length; j++){
      row += lists[i][j].key + ' '.repeat(4);
    }
    console.log(row);
  }
}

module.exports = createListOfDepths;