const findMaxSumSubArray = (k, arr) => {
 
  let maxSum = 0
  for(let i = 0; i < arr.length; i++){
    let array = [], increment = 0
    while(array.length < k){
      array.push(arr[i + increment])
      increment++
    }
    let sum = array.reduce((a,b) => a + b)
    if( sum > maxSum){
      maxSum = sum 
    }
  }
  return maxSum
};


console.log(findMaxSumSubArray(3, [2, 1, 5, 1, 3, 2])) // 9
console.log(findMaxSumSubArray(2, [2, 3, 4, 1, 5]))    // 7
console.log(findMaxSumSubArray(2, [2, 1, 4, 1, 1]))    // 5
console.log(findMaxSumSubArray(3, [2, 1, 4, 1, 1]))    // 7
console.log(findMaxSumSubArray(4, [2, 1, 4, 1, 1]))    // 8