//Write your student id, firstname, and lastname in a single line comment before starting your program
//students who do not put this comment will get 50% taken off their score.
//ID:65130500015       Name:Chanapon Auafaur
findVowels
// Instruction:
// - Write a JavaScript function named findVowels to search for the vowels ['a', 'e', 'i', 'o',
// 'u'] and determine their positions. It takes a string word and returns an object showing
// the vowels present and their positions in the string.
// Initiate code:
// // Insert your code here
// console.log(findVowels("Heleelaeiouo"));
// Output:
// {
// e: [ '1', '3', '4', '7' ],
// a: [ '6' ],
// i: [ '8' ],
// o: [ '9', '11' ],
// u: [ '10' ]
// }
function findVowels(word) {
//your code here...
const chars = [...word]
chars.forEach((element)=>console.log(element+element.length))}



console.log(findVowels("Heleelaeiouo"));
// Output
// {
//   e: [ '1', '3', '4', '7' ],
//   a: [ '6' ],
//   i: [ '8' ],
//   o: [ '9', '11' ],
//   u: [ '10' ]
// }
