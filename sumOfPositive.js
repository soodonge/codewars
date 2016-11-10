// arr  안에 숫자가 양수만, 다 더해라.
function positiveSum(arr) {
  var sum = 0;
  var newarr = [];
  for(var i = 0; i < arr.length; i++){
    if(arr[i] > 0){
      sum = sum + arr[i];
    }
  }
  return sum;
}

module.exports = positiveSum;
