var makeStack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking vy similar,
  // but try not not reference your old code in writing the new style.

  var storage = Object.create(stackMethods);
  storage._size = 0;
  return storage;


};

var stackMethods = {};

stackMethods.push = function(value){


this._size++;

this[this._size] = value;

};

stackMethods.pop = function(){
  var temp = this[this._size];
  delete this[this._size];
  if(this._size > 0){
    this._size--;
  }
  return temp;


};

stackMethods.size = function(){
  return this._size;
};
