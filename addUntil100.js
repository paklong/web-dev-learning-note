
function addUntil100(arr) {
  if (arr.length == 0) return 0;
  const result = addUntil100(arr.slice(1));
  if (arr[0] + result > 100) {
    return result;
  }
  return arr[0] + result;
}



function test() {
  console.log(`Expect ${addUntil100([9, 8, 7, 6, 5, 4, 3, 2, 1, 90])} to be 100`);
  console.log(`Expect ${addUntil100([90, 1, 2, 3, 4, 5, 6, 7, 8, 9])} to be 45`);
}

test();

