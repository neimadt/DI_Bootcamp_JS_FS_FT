
const sentence = 'The movie is not that bad, I like it';
const wordNotPos = sentence.indexOf('not');
console.log(wordNotPos);

const wordBadPos = sentence.indexOf('bad');
console.log(wordBadPos);

let substr = sentence.substring(wordNotPos, wordBadPos + 3)

console.log(substr);

const replacedValue = sentence.replace(substr, 'good')
console.log(replacedValue);
