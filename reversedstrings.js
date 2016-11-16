function solution(str){
  var sum = "";
//   var x = str.split('');
//   var y = x.reverse();
//   var z = y.join('');
  for(var i = str.length -1; i >= 0; i--){
    sum = sum + str[i];
  }
  return sum
}  
