//function evenNumOnly(arr, result = []) {
//  if (arr.length === 0) return result;
//
//  if (arr[0] % 2 === 0) {
//    result.push(arr[0])
//  }
//
//  return evenNumOnly(arr.slice(1), result);
//}

//function evenNumOnly(arr) {
//  if (arr.length === 0) return [];
//
//  if (arr[0] % 2 == 0) {
//    return [arr[0], ...evenNumOnly(arr.slice(1))];
//  }
//  else {
//    return evenNumOnly(arr.slice(1));
//  }
//}
//
function evenNumOnly(arr) {
  if (arr.length === 0) return [];
  const result = evenNumOnly(arr.slice(1));

  if (arr[0] % 2 === 0) {
    result.push(arr[0]);
  }

  return result;
}



function test() {
  const test1 = [1, 2, 3, 4];
  console.log(`Expect ${evenNumOnly(test1)} to be [2,4]`);
  const test2 = [1, 2, 3, 4, 5, 6];
  console.log(`Expect ${evenNumOnly(test2)} to be [2,4,6]`);
}

test();
