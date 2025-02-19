//function tri(n) {
//  if (n === 1) return 1;
//  return n + tri(n - 1);
//}

function tri(n) {
  if (n === 1) return 1;
  let count = tri(n - 1);
  count += n;
  return count;
}






function test() {
  console.log(`Expect ${tri(7)} to be 28`);
  console.log(`Expect ${tri(5)} to be 15`);
}

test()
