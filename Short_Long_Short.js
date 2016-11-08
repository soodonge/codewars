function solution(a, b){
  //if short outsude , long inside
  var a_Str = a.toString();
  var b_Str = b.toString();

  if(a_Str.length > b_Str.length){
    return a + b + a;
  }else if(a_Str.length < b_Str.length){
    return b + a + b;
  }
}

module.exports = solution;
