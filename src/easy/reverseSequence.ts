// DESCRIPTION:
// Build a function that returns an array of integers from n to 1 where n>0.

// EXAMPLE:
// n=5 //returns [5,4,3,2,1]
export const reverseSeq = (n: number): number[] => {
  const result: number[] = [];
  for (let i = n; i > 0; i--) {
    result.push(i);
  }
  return result;
};
