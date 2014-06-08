var Queue = function() {
  this._size = 0;
  this.base = 0;
};

Queue.prototype.enqueue = function(value){
  this[this._size + this.base] = value;
  this._size++;
};

Queue.prototype.dequeue = function(){
  var temp = this[this.base];
  delete this[this.base];
  this.base++;
  if(this._size > 0){
    this._size--;
  }
  return temp;
};

Queue.prototype.size = function(){
  return this._size;
};

