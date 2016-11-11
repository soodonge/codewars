//numberOfPeopleInTheBus
var number = function(busStops){
  var sum = 0;
  for(var i = 0; i < busStops.length; i++){
    var arr = busStops[i];
    sum = sum + arr[0] - arr[1];
  }
  return sum;
}

module.exports = number;
