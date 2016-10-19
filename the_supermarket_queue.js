function queueTime(customers, n) {
  // Till들을 만들기
  var tills = [];
  for(var i = 0; i < n; i++){
    tills.push(0);
  }

  // Customer 하나 하나 다보기
  for(var i = 0; i < customers.length; i++){
    var customerTime = customers[i];
    // 어디다 넣지? 시간이 가장 적은 till에
    // 그럼 시간이 가장 적은 till을 찾자! 넘 복잡하니
    //시간이 적은 till을 찾는 것만 생각하자! function만들기
    var minIndex = findMinimumTillIndex(tills)
    // 시간적은 till에 고객 넣고 update하기
    tills[minIndex] = tills[minIndex] + customerTime;
  }

  // Till들중 가장 많이 걸리는 till 찾기
  var maxTime = 0;
  for(var i = 0; i < tills.length; i++){
    var totalTime = tills[i];
    if(totalTime >= maxTime){
      maxTime = totalTime;
    }
  }
  return maxTime;

}

function findMinimumTillIndex(tills){
  var minValue = tills[0];
  var minIndex = 0;
  for(var i = 0; i < tills.length; i++){
    if(minValue > tills[i]){
      minValue = tills[i];
      minIndex = i
    }
  }
  return minIndex;
}



module.exports = queueTime;
