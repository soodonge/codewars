function solution(str, ending){
//str 마지막,ending마지막이 같으면,
//solution('abc', 'bc') // returns true
//solution('sumo', 'omo')
//solution('samurai', 'ai')
//solution('abc', 'abc')
//str 두번째 부터 잘랐을때 , ending 과 길이가 같으면,
  var str1 = str.slice(str.length-2 , str.length)
  var str2 = str.slice(str.length-1 , str.length)

  if(str1 === ending){
    return true;
  }else if(str2 === ending){
    return true;
  }else {
    return false;
  }
}
