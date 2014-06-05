var makeQueue = function(){
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var storage = {};
  storage['_size'] = 0;
  storage['base'] = 1;
  _.extend(storage, queueMethods);

  return storage;
};

var queueMethods = {};

queueMethods.enqueue = function(value){
  this._size++;
  this[this._size + this.base - 1] = value;
};


queueMethods.dequeue = function(){
  var temp = this[this.base];
  delete this[this.base];
  if(this['_size'] > 0){
    this._size--;
  }
  this.base++;
  return temp;
};


queueMethods.size = function(){

return this._size;

};
