function max(arr) {
  if (arr.length == 0) return -Infinity;

  let result = max(arr.slice(1));
  return arr[0] > result ? arr[0] : result;
}




function test() {
  console.log(`Expect ${max([1, 3, 2])} to be 3`)
  console.log(`Expect ${max([-1, -3, -2])} to be -1`)
}

test();
