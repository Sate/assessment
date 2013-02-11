var BakedGood = function(){

  this.eat = function(){console.log('Om nom nom '+this.type+'.');}

};

  

var Cookie = function(typeOfCookie){

  this.type = typeOfCookie;
  
};


Cookie.prototype = Object.create(new BakedGood);







