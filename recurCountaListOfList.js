function counta(arr, count = 0) {
  for (const subArr of arr) {
    if (Array.isArray(subArr)) {
      count = count + counta(subArr, count);
    } else {
      count = count + 1;
    }
    return count;
  }
}



function test() {
  const test1 = [1, 2, [3, 4], 5];
  console.log(`Expect ${counta(test1)} to be 5`);

  const test2 = [[1, 2, 3], [4, 5], 6];
  console.log(`Expect ${counta(test2)} to be 6`);
}

test();
