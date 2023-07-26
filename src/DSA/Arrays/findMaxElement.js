function findMaxElement(arr) {
  //check if input array is valid or empty
  if (!arr || arr.length === 0) {
    return null;
  }

  let max = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];
    }
  }

  return max;
}

const array = [5, 10, 15, 0, -45];
console.log(findMaxElement(array));
