function reverseWords(sentence) {
    
    var words = sentence.split(' ');
    var reversedWords = words.map(function(word) {
        return word.split('').reverse().join('');
    });
    var reversedSentence = reversedWords.join(' ');
    return reversedSentence;
}
var userInput = prompt("Enter a sentence:");
var reversedResult = reverseWords(userInput);
console.log("Original Sentence: " + userInput);
console.log("Reversed Sentence: " + reversedResult);
