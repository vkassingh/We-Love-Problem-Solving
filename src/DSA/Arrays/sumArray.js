function findSum(arr) {
  if (!arr || arr.length === 0) {
    return null;
  }

  let sum = 0;
  for (let i = 3; i < arr.length; i++) {
    sum = sum + arr[i];
  }

  return sum;
}

const arr = [1, 2, 3, 4, 5];
console.log(findSum(arr));
