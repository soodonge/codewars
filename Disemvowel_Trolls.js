function disemvowel(str){
  var vowel = ['a','e','i','o','u']
  var vcount = 0;
  for( var x = 0; x < str.length ; x++)
  if (vowel.indexOf(str[x]) !== -1){
  vcount += 1;
 }
 return str.replace(/[aeiou]/gi, '');
}

module.exports = disemvowel
