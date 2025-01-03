function SquareRootOrNotToSquareRoot (arr){
    let result = [];
for(let i=0;i<arr.length;i++){
    if(Number.isInteger(Math.sqrt(arr[i]))){
     result.push(Math.sqrt(arr[i]))
    }
    else{
      result.push(arr[i]*arr[i])
    }
}
return result;

}
console.log(SquareRootOrNotToSquareRoot([4,25,9,7,100]));