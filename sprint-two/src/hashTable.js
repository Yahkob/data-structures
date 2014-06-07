var getIndexBelowMaxForKey;
var HashTable = function(){
  this._limit = 8;
  this._storage = makeLimitedArray(this._limit);

};

HashTable.prototype.insert = function(k, v){
  var index = getIndexBelowMaxForKey(k, this._limit);
  var element = this._storage.get(index);
  if(element){
    for(var i = 0; i < element.length; i++){
      if(k === element[i][0]){
        element[i][1] = v;
        return;
      }
    }
    element.push([k,v]);
  }else{
    this._storage.set(index,[[k,v]]);
  }
};

HashTable.prototype.retrieve = function(k){
  var index = getIndexBelowMaxForKey(k, this._limit);
  var element = this._storage.get(index)
  if(element){
    for(var i = 0; i < element.length; i++){
      if(element[i][0] === k){
        return element[i][1];
      }
    }
    return null;
  }
  return element;
};

HashTable.prototype.remove = function(k){
  var index = getIndexBelowMaxForKey(k, this._limit);
  var element = this._storage.get(index);
  if(element){
    for(var i = 0; i < element.length; i++){
      if(element[i][0] === k){
        return element.splice(i,1);
      }
    }
  }
  return undefined;
};


/*
 * Complexity: What is the time complexity of the above functions?
 */
