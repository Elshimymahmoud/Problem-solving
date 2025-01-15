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
// console.log(SquareRootOrNotToSquareRoot([4,25,9,7,100]));
var searchInsert = function(nums, target) {
  let l=0
  let h=nums.lenght;
  let m=l+h/2;
  return nums[m]
};  console.log(searchInsert([1,5,3],5));
