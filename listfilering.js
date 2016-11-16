function filter_list(l) {
  var Newarr = [];
  for(var i = 0; i < l.length; i++){
    if(Number.isInteger(l[i])){
      Newarr.push(l[i]);
    }
  }
  return Newarr;
}



//Nuber.isInteger() = 숫자만 체크,
// isNaN = '1' 이것도 체크

function filter_list(l) {
  var Newarr = [];
  for(var i = 0; i < l.length; i++){
    if(typeof(l[i]) === 'number'){
      Newarr.push(l[i]);
    }
  }
  return Newarr
}
