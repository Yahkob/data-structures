var makeQueue = function(){
  var someInstance = {};
  var storage = {};
  var size = 0;
  var base = 0;

  someInstance.enqueue = function(value){
    storage[size + base] = value;
    size++;
  };

  someInstance.dequeue = function(){
    var temp = storage[base]
    delete storage[base];
    base++;
    if(size > 0){
      size--;
    }
    return temp;
  };

  someInstance.size = function(){
    return size;
  };

  return someInstance;
};
