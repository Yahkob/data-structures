var makeSet = function(){
  var set = Object.create(setPrototype);
  set._storage = null;
  return set;
};

var setPrototype = {};

setPrototype.add = function(item){
  this[item] = item;
};

setPrototype.contains = function(item){
  if(this[item]){
    return true
  }
  return false
};

setPrototype.remove = function(item){
  if(this[item]){
    delete this[item]
  }
};
/*
 * Complexity: What is the time complexity of the above functions?
 */
