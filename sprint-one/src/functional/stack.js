var makeStack = function(){
  var someInstance = {};
  var storage = {};
  var size = 0;

  someInstance.push = function(value){
    size++;
    storage[size] = value;
  };

  someInstance.pop = function(){
    var temp = storage[size];
    delete storage[size];
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
