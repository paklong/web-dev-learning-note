//function countStr(arr) {
//  if (arr.length == 0) return 0;
//  return arr[0].length + countStr(arr.slice(1));
//}
function countStr(arr) {
  if (arr.length === 0) return 0;
  let count = countStr(arr.slice(1));
  count += arr[0].length;
  return count;
}

function test() {
  const test1 = ['ab', 'c', 'def', 'ghij'];
  console.log(`Expect ${countStr(test1)} to be 10`);
  const test2 = ['ab', 'c', 'def', 'ghij', 'k'];
  console.log(`Expect ${countStr(test2)} to be 11`);
  const test3 = [];
  console.log(`Expect ${countStr(test3)} to be 0`);
  const test4 = ['abc'];
  console.log(`Expect ${countStr(test4)} to be 3`);
}

test();

