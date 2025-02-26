
//  if (row === 1 || col === 1) return 1;
//  return shortestPath(row - 1, col) + shortestPath(row, col - 1)
//}

function shortestPath(row, col, memo = {}) {
  if (row === 1 || col === 1) return 1;
  const key = row > col ? row.toString() + col.toString() : col.toString() + row.toString()
  if (!memo[key]) {
    memo[key] = shortestPath(row - 1, col) + shortestPath(row, col - 1)
  }
  return memo[key]
}

// This is a solution without recurion
// Don't use Array(3).fill(Array(3).fill(0)); because array is passed by reference
// This way will have saem reference of array accros row
function shortestPath(row, col) {
  let dp = Array(row).fill(0).map(() => Array(col).fill(0));

  // Base case: First row and first column have only one way to be reached
  for (let i = 0; i < row; i++) dp[i][0] = 1;
  for (let j = 0; j < col; j++) dp[0][j] = 1;

  // Fill the dp table using bottom-up approach
  for (let i = 1; i < row; i++) {
    for (let j = 1; j < col; j++) {
      dp[i][j] = dp[i - 1][j] + dp[i][j - 1];
    }
  }

  return dp[row - 1][col - 1];
}

console.log(shortestPath(3, 3)); // Output: 6



function test() {
  console.log(`Expect ${shortestPath(row = 1, col = 1)} to be 1`);
  console.log(`Expect ${shortestPath(row = 1, col = 2)} to be 1`);
  console.log(`Expect ${shortestPath(row = 2, col = 1)} to be 1`);
  console.log(`Expect ${shortestPath(row = 2, col = 2)} to be 2`);
  console.log(`Expect ${shortestPath(row = 2, col = 3)} to be 3`);
  console.log(`Expect ${shortestPath(row = 3, col = 2)} to be 3`);
  console.log(`Expect ${shortestPath(row = 3, col = 3)} to be 6`);
}

test();
