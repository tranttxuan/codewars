// https://www.codewars.com/kata/525f039017c7cd0e1a000a26 
var palindromeChainLength = function (n) {
    let count = 0;
    let numCheck = n;
    while (checkPalindrome(numCheck) !== 0) {
        count += 1;
        numCheck = checkPalindrome(numCheck)
    }
    return count
};



function checkPalindrome(number) {
    let reverseNumber = Number(number.toString().split('').reverse().join(''));
    return reverseNumber !== number ? (reverseNumber + number) : 0;
}

// var palindromeChainLength  = function(n) {  
//     var x = parseInt( (""+n).split('').reverse().join('') );
//     if(n != x){
//       return 1 + palindromeChainLength (n +var palindromeChainLength  = function(n) {  
  var x = parseInt( (""+n).split('').reverse().join('') );
  if(n != x){
    return 1 + palindromeChainLength (n + x);
  }
  return 0;
}; x);
//     }
//     return 0;
//   };

console.log(palindromeChainLength(89))