








function test() {
  console.log(`Expect ${shortestPath(row = 1, col = 1)} to be 1`);
  console.log(`Expect ${shortestPath(row = 1, col = 2)} to be 1`);
  console.log(`Expect ${shortestPath(row = 2, col = 1)} to be 1`);
  console.log(`Expect ${shortestPath(row = 2, col = 2)} to be 2`);
  console.log(`Expect ${shortestPath(row = 2, col = 3)} to be 3`);
  console.log(`Expect ${shortestPath(row = 3, col = 2)} to be 3`);
  console.log(`Expect ${shortestPath(row = 3, col = 3)} to be 5`);
}

test();
