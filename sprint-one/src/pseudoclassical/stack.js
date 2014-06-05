var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  this._size = 0;
};


  Stack.prototype.push = function(value){
    this._size++;
    this[this._size] = value;
  };

  Stack.prototype.pop = function(){
    var temp = this[this._size]
    delete this[this._size];
    if(this._size !== 0){
      this._size--;
    }
    return temp;
  };

  Stack.prototype.size = function(){
    return this._size;
  };

