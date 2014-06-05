var makeQueue = function(){
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};

  // Implement the methods below
  var size = 0;
  var base = 1;
  someInstance.enqueue = function(value){
      size++;
    storage[size + base - 1] = value;
  };

  someInstance.dequeue = function(){
    var temp = storage[base]
    if(size > 0){
      size--;
    }
    delete storage[base];
    base++;

    return temp;
  };

  someInstance.size = function(){
    return size;
  };

  return someInstance;
};
