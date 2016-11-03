function squareDigits(num){
  // 각 수자를 제곱해서 다시 합친다.
  //9119
  var str = num.toString()
  var sum = ""
  for(var i = 0; i < str.length; i++){
    var pow = Math.pow(parseInt(str[i]),2)
    sum += pow
  }
  return parseInt(sum);
  //num - str - num - str
}

module.exports = squareDigits;
