// - A stack is like a stack of plates. It is a last-in, first-out type of deal. You generally only operate on the item that is currently at the top of the stack. You would use a stack to resolve chaining callbacks. Each chained callback adds to the top of the stack, and you must resolve the most recent callback first, chaining back down to the first one. 

// -A queue is like a waiting line. The first-in is also the first-out. You may use a queue for waitlisting users on a service that is overcapacity. Users who are first in line, will be the first ones allowed to use the service. 

Array.prototype.last = function(){
  return this[this.length-1];
}

Array.prototype.first = function(){
  return this[0];
}

Array.prototype.removeAtIndex = function(index){
  this.splice(index,1);
}