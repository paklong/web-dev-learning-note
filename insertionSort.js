function insertionSort(arr) {
    
    for (let i = 1; i < arr.length; i++) {
        // console.log(arr);
        let tempVal = arr[i]; 
        let emptyCell = i;
        
        // console.log(`i is ${i}, temp val is ${tempVal}`);
        let isCompleted = true;
        
        for (let j = i-1; j >= 0; j--) {
            let compVal = arr[j]; 
            // console.log(`j is ${j}, comp val is ${compVal}`);
            if (compVal > tempVal) {
                
                // console.log(`${compVal} is > ${tempVal}, puting ${compVal} to ${j+1}`);
                arr[j+1] = compVal;
                emptyCell = j;
            } 
        }
        arr[emptyCell] = tempVal;
        // console.log(`Finished first pass, current arr is ${arr}\n`);
        
        
        

    }
    
    return arr;
}


let unSorted = [0, 8,36,9,4,2,1,7];

console.log(insertionSort(unSorted));
