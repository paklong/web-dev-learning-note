// iteration 
// return single value
function fib(n) {
    if (n===0) {return 0}
    if (n===1) {return 1}
    
    let a = 0;
    let b = 1;
    let c = a + b;

    let i = 3;
    
    while (i <= n) {
        [a, b] = [b, c];
        c = a + b;
        i++;
    }
    
    return c;
}

// iteration 
// return array
function fib(n) {
    if (n===0) {return [0]}
    if (n===1) {return [0, 1]}
    
    let a = 0;
    let b = 1;
    let c = a + b;
    let arr = [a, b, c];

    let i = 3;
    
    while (i <= n) {
        [a, b] = [b, c];
        c = a + b;
        arr.push(c);
        i++;
    }
    
    return arr;
}


// recursion 
// return single values
function fib(n) {
    if (n===0) {return 0}
    if (n===1) {return 1}

    return fib(n-1) + fib(n-2);
}

// recursion 
// return array
function fib(n, arr=[0, 1]) {
    if (n===0) {return arr.slice(0, 1)}
    if (n===1) {return arr}

    arr.push(arr[arr.length - 1] + arr[arr.length - 2]);
    return fib(n-1, arr);
}


// fib(4, arr=[0,1])
//   return fib(3, arr=[0,1,1])
//     return fib(2, arr=[0,1,1,2])
//       return fib(1, arr=[0,1,1,2,3])
//         return arr
//       arr
//     arr
//   arr