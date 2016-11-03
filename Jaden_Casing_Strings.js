String.prototype.toJadenCase = function () {
  //"How can mirrors be real if our eyes aren't real"
  //단어로 쪼갠다 .split
  //첫글자를 대문자로 toUpperCase str[0] = str[0][0] h
  //합친다 .join

  var str = this.split(' ');
  for(var i = 0; i < str.length; i++){
    str[i] = str[i].replace(str[i][0],str[i][0].toUpperCase())
  }
  var sum = str.join(' ');
  console.log(sum)
  return sum;
};


// var a = 'aavfveba'
// var str = ''

// for (var i = 0; i < a.length; i++ ) {
//   if (a[i] === 'a') {
//     str += a[i].toUpperCase();
//   } else {
//     str += a[i]
//   }
// }
