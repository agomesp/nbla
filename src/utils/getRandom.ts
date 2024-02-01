/* eslint-disable @typescript-eslint/no-explicit-any */
const delay = (ms: number | undefined) => new Promise(resolve => setTimeout(resolve, ms));

const getFilteredArray = async (type: any, arr: string | any[], quantity: number) => {
  const random = type === 'random';
  let n = Math.min(quantity - 1, arr.length);
  const result = new Array(n);
  let len = arr.length;
  const taken = new Array(len);

  if (!random) {
    return arr.slice(0, n);
  }

  if (n > len) {
    throw new RangeError("getFilteredArray: more elements taken than available");
  }

  for (n; n >= 0; n--) {
    await delay(0);
    const x = Math.floor(Math.random() * len);
    result[n] = arr[x in taken ? taken[x] : x];
    taken[x] = --len in taken ? taken[len] : len;
  }

  return result;
};

export default getFilteredArray;