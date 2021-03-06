/**
 * Given an arbitrary input string, return the first nonrepeated character in
 * the string. For example:
 *
 *   firstNonRepeatedCharacter('ABA'); // => 'B'
 *   firstNonRepeatedCharacter('AACBDB'); // => 'C'
 */

// Both for loops are linear for a time complexity of 2n -> n. Nested for loops (worse) create a time complexity of n^2.
var firstNonRepeatedCharacter = function(string) {
  var obj = {};
  for (var i=0; i<string.length; i++) {
    var letter = string[i];
    if (!obj[letter]) {obj[letter] = 1;}
    else {obj[letter]++;}
  }

  for (letter in obj) {
    if (obj[letter] === 1) {return letter;}
  }
  return null;
}

var result = firstNonRepeatedCharacter('EBEAB');
console.log(result);