

function findGreatest(arr, i = 0, max = 0) {
    if (i === arr.length) {
        return max;
    }
    console.log(arr[i]);
    
    return findGreatest(arr, i + 1, (arr[i] > max) ? arr[i] : max);
}


// function findGreatest(arr) {
//     let currGreatest = arr[0];
//     for (let i = 1; i < arr.length ; i++) {
//         currGreatest =  (arr[i] > currGreatest) ? arr[i] : currGreatest
//     }
    
//     return currGreatest;
// }


// function findGreatest(arr) {
//     let currGreatest = arr[0];
//     arr.forEach(
//         (value) => {
//             currGreatest =  (value > currGreatest) ? value : currGreatest
//         }
//     )
//     return currGreatest;
// }


// function findGreatest(arr) {
//     let currGreatest = arr[0];
//     return arr.reduce(
//         (total, curr) => (
//             (curr > total) ? curr : total
//         )
//     );
// }
(findGreatest([1,9,3]))