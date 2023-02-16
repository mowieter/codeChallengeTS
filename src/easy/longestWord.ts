// DESCRIPTION:
// When given a string of space separated words, return the word with the longest length.  If there are multiple words with the longest length, return the last instance of the word with the longest length.

// EXAMPLE:
// 'red white blue' //returns string value of white
// 'red blue gold' //returns gold

export const longestWord = (stringOfWords: string): string => {
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
