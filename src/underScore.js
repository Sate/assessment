-Start out with a function. 
-Take a list of stuff, this should be an array or an object. 
-Go through each thing in this list.
-For each thing you go through, pass it as an argument into your function, and call the function.
-That is it!

// assume you have _.each
_.map = function(list, iterator){
  var result = [];
  _.each(list, function(item){
    result.push(iterator(item))
  });
  return result;
} 

_.filter = function(list, iterator){
  var result = [];
  _.each(list, function(item){
    if (iterator(item)){
      result.push(item);
    }
  });
  return result;
}