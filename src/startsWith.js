var startsWith =  function(smallString, bigString){
  
  if (typeof(bigString) === "string" && typeof(smallString)==="string"){

    var charsInSmall = smallString.length;
    var result = bigString.slice(0, charsInSmall);
    return result === smallString;
  } else {
    console.log("ERROR: Parameters for startsWith function MUST be strings.");
  }

}