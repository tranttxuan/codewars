// https://www.codewars.com/kata/5631ac5139795b281d00007d/train/javascript

// Design a data structure that supports the following two operations:

// addWord (or add_word) which adds a word,
// search which searches a literal word or a regular expression string containing lowercase letters "a-z" or "." where "." can represent any letter
// You may assume that all given words contain only lowercase letters.

// Examples
// addWord("bad")
// addWord("dad")
// addWord("mad")

// search("pad") === false
// search("bad") === true
// search(".ad") === true
// search("b..") === true

var WordDictionary = function (cont) {
  this.arr = [];
};

WordDictionary.prototype.addWord = function (word) {
   this.arr.push(word)
};

WordDictionary.prototype.search = function (word) {
  let regex = new RegExp(`^${word}$`, 'g')
  return this.arr.some(e => regex.test(e));
}