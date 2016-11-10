var min = function(list){

    var minNum = list[0];
    for(var i = 1; i < list.length; i++){
      if(list[i] < minNum){
        minNum = list[i];
      }
    }
    return minNum;
}

var max = function(list){
    var maxNum = list[0];
    for(var i = 1; i < list.length; i++){
      if(list[i] > maxNum){
        maxNum = list[i]
      }
    }
    return maxNum;
}

module.exports = {
  min: min,
  max: max
}
