var bubblesort = function(array){
  var switcher = true;
  while(switcher){
    var count = 0;
    for (var i = 0; i < array.length; i++ ){
      if(array[i] > array[i+1]){
        var temp = array[i+1];
        array[i+1] = array[i];
        array[i] = temp;
        count++;
      }
    }
    if (count == 0){switcher = false;}
  }
  return array;
};