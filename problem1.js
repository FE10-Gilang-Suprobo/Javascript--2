let pairSum = (array, target) => {
    
      let results = []

        for (let i = 0; i < array.length; i++){
            for ( let j = i + 1; j < array.length; j++) {
                if ( array[i] + array[j] === target) {
                    results = [i,j]
                }
            }
        }
        return results
    }

     
console.log(pairSum([1, 2, 3, 4, 6], 6)) // [1, 3]
console.log(pairSum([2, 5, 9, 11], 11))  // [0, 2]
console.log(pairSum([1, 3, 5, 7], 12))   // [2, 3]
console.log(pairSum([1, 4, 6, 8], 10))   // [1, 2]
console.log(pairSum([1, 5, 6, 7], 6))    // [0, 1]