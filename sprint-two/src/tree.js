var makeTree = function(value){
  var newTree = {};
  newTree.value = value;
  newTree.children = undefined;
  _.extend(newTree,treeMethods);
  return newTree;
};




var treeMethods = {};

treeMethods.addChild = function(value){
  if(!this.children){
    this.children = [];
    this.children.push(makeTree(value));
  }
  else{
    this.children.push(makeTree(value));
  }


};
treeMethods.contains = function(target){
    var results = false;
    var findNode = function(node){
      if(node.value === target){
        results = true;
      }
      if(node.children !== undefined){
        for(var i = 0; i < node.children.length; i++){
          findNode(node.children[i]);
        }
      }
    };
    findNode(this);
    return results;
  };



/*
 * Complexity: What is the time complexity of the above functions?
 */
