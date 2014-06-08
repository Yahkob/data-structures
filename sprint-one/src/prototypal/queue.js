var makeQueue = function() {
  var storage = Object.create(queueMethods);
  storage._size = 0;
  storage.base = 0;
  return storage;
};

var queueMethods = {};

queueMethods.enqueue = function(value){
  this[this._size + this.base] = value;
  this._size++;
};

queueMethods.dequeue = function(){
  var temp = this[this.base];
  delete this[this.base];
  this.base++;
  if(this._size !== 0){
    this._size--;
  }
  return temp;
};

queueMethods.size = function(){
  return this._size;
};
