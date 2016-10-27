function getCount(str) {
  var vowelsCount = 0;
  var str = str.split(" ").join("");
  //var str = str.toString

    for(var i = 0; i <= str.length; i++){
      if(str.charAt(i) === 'a' || str.charAt(i) === 'e' || str.charAt(i) === 'i' || str.charAt(i) === 'o' || str.charAt(i) === 'u'  ){
        vowelsCount += 1;
      }else if(str.charAt(i) === 'A' || str.charAt(i) === 'E' || str.charAt(i) === 'I' || str.charAt(i) === 'O' || str.charAt(i) === 'U'  ){
        vowelsCount += 1;
      }

    }
  return vowelsCount;
}
module.exports = getCount;
