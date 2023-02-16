// DESCRIPTION:
// Write an algorithm that takes an array and moves all of the zeros to the end, preserving the order of the other elements.

// EXAMPLE:
// moveZeros([false,1,0,1,2,0,1,3,"a"]) // returns[false,1,1,2,1,3,"a",0,0]

export const moveZeros = (
  arr: (string | number | boolean | null | object | Array<[]>)[]
) => {
  let j = 0;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== 0) {
      const temp = arr[i];
      arr[i] = arr[j];
      arr[j] = temp;

      j++;
    }
  }

  return arr;
};
