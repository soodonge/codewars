function lovefunc(flower1, flower2){
  // moment of truth
  //odd + odd = false
  //even + even = false
  //odd + even = true
  //even + odd = true
  if(flower1 % 2 === 1 && flower2 % 2 === 1){
    return false;
  }else if(flower1 % 2 === 0 && flower2 % 2 === 0){
    return false;
  }else if(flower1 % 2 === 1 && flower2 % 2 === 0){
    return true;
  }else if(flower1 % 2 === 0 && flower2 % 2 === 1){
    return true;
  }
}

module.exports = lovefunc;

// function lovefunc(flower1, flower2){
//   if((flower1 + flower2) % 2 === 1){
//     return true
//   }
// }
