function golomb(n, call = []) {
  if (!call[0]) {
    call[0] = 1;
  } else {
    call[0] = call[0] + 1;
  }
  console.log(call[0]);
  if (n == 1) return 1;



  return 1 + golomb(n - golomb(golomb(n - 1, call), call), call);
}


function golomb2(n, memo = {}, call = []) {
  if (!call[0]) {
    call[0] = 1;
  } else {
    call[0] = call[0] + 1;
  }
  console.log(call[0]);
  if (n == 1) return 1;
  if (!memo[n]) {
    memo[n] = 1 + golomb2(n - golomb2(golomb2(n - 1, memo, call), memo, call), memo, call);
  }
  return memo[n];
}


function test() {
  console.log(`Expect ${golomb2(9)} to be 5 call time = 9`);
}

test()
