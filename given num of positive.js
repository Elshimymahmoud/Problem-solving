// count of negitive and num of positive

function CountPositiveAndSumOfNegative(arr){
    let positiveArr=[]
    let negativeSum=0
    for(let i=0;i<arr.length;i++){
        if(arr[i]>0){
            positiveArr.push(arr[i])
        }
        else{
            negativeSum+=arr[i]
        }
     
    } 
      return [positiveArr.length,negativeSum]
}
console.log(CountPositiveAndSumOfNegative([1,2,3,-1,-2,-3]));