var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.

  this._size = 0;
  this.base = 0;

};

Queue.prototype.enqueue = function(value){

  this._size++;

  this[this._size + this.base - 1] = value;


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
