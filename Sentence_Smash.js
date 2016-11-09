// Smash Words
function smash (words) {
    "use strict";
    var sum = '';
    for(var i = 0; i < words.length; i++){
      if(i === 0){
        sum = sum + words[i]
      }else {
        sum = sum + ' ' + words[i]
      }

    }
    return sum;
};
