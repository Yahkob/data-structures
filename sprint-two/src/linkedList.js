var makeLinkedList = function(){
  var list = {};
  list.head = null;
  list.tail = null;
  //adds a value to tail
  list.addToTail = function(value){
    if(list.tail === null){
      this.tail = makeNode(value);
      this.head = this.tail;
    }else{
      this.tail.next = makeNode(value);
      this.tail = this.tail.next;
    }

  };
  //removes value from head
  list.removeHead = function(){
    var temp = this.head;
    this.head = this.head.next;
    return temp.value;
  };
  //checks link list for target value
  list.contains = function(target){
    var result = false;
    var check = function(element){

      if(element.value === target){
        result = true;
      }
      if(element.next !== null){
        check(element.next);
      }
    };

    check(this.head);

    return result;

  };

  return list;
};
//
var makeNode = function(value){
  var node = {};
  node.value = value;
  node.next = null;

  return node;
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
