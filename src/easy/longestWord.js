"use strict";
// DESCRIPTION:
// When given a string of space separated words, return the word with the longest length.  If there are multiple words with the longest length, return the last instance of the word with the longest length.
Object.defineProperty(exports, "__esModule", { value: true });
exports.longestWord = void 0;
// EXAMPLE:
// 'red white blue' //returns string value of white
// 'red blue gold' //returns gold
const longestWord = (stringOfWords) => {
    const words = stringOfWords.split(" ");
    let longestWord = "";
    for (let i = 0; i < words.length; i++) {
        const word = words[i];
        if (word.length >= longestWord.length) {
            longestWord = word;
        }
    }
    return longestWord;
};
exports.longestWord = longestWord;
//# sourceMappingURL=longestWord.js.map