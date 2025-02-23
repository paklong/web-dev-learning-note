
//  if (row === 1 || col === 1) return 1;
//  return shortestPath(row - 1, col) + shortestPath(row, col - 1)
//}

function shortestPath(row, col) {
  if (row === 1 || col === 1) return 1;
  let total = shortestPath(row - 1, col) + shortestPath(row, col - 1)
  return total
}






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
