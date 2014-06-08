var makeQueue = function(){
  var _storage = {};
  _storage._size = 0;
  _storage._base = 0;
  _.extend(_storage,queueMethods);
  return _storage
};

var queueMethods = {};

queueMethods.enqueue = function(value){
  this[this._size + this._base] = value;
  this._size++;
};

queueMethods.dequeue = function(){
  var temp = this[this._base];
  delete this[this._base];
  this._base++;
  if(this._size > 0){
    this._size--;
  }
  return temp
};

queueMethods.size = function(){
  return this._size;
};
