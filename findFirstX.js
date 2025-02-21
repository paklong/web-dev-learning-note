//function firstX(arr, count = 0) {
//  if (arr.length === 0) return -1;
//
//  if (arr[0] === 'x') {
//    return count;
//  }
//  else {
//    return firstX(arr.slice(1), count + 1);
//  }
//}

function firstX(arr, count = 0) {
  if (arr.length === 0) return;
  let result = firstX(arr.slice(1), count + 1);

  if (arr[0] === 'x') {
    return count;
  }
  return result;

}




function test() {
  console.log(`Expect ${firstX('abcxd')} to be 3`);
  console.log(`Expect ${firstX('abcdefgx')} to be 7`);
  console.log(`Expect ${firstX('ab')} to be -1`);
}

test();
