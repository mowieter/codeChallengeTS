// DESCRIPTION:
// I want to know the size of the longest consecutive elements of X in Y. You will receive two arguments: items and key. Return the length of the longest segment of consecutive keys in the given items.

// NOTES:
// The items and the key will be either an integer or a string (consisting of letters only)
// If the key does not appear in the items, return 0

// EXAMPLE:
// 90000, 0           //returns integer value of 4
// "abcdaaadse", "a"  //returns integer value of 3
// "abcdaaadse", "z"  //returns integer value of 0

export const getConsecutiveItems = (
  items: string | number,
  key: string | number
) => {
  const strItems = items.toString(); // convert to string if items is a number
  const strKey = key.toString(); // convert to string if key is a number

  if (!strItems.includes(strKey)) {
    return 0;
  }

  let longestConsecutiveLength = 0;
  let currentConsecutiveLength = 0;

  for (let i = 0; i < strItems.length; i++) {
    if (strItems[i] === strKey) {
      currentConsecutiveLength++;
      longestConsecutiveLength = Math.max(
        longestConsecutiveLength,
        currentConsecutiveLength
      );
    } else {
      currentConsecutiveLength = 0;
    }
  }

  return longestConsecutiveLength;
};
