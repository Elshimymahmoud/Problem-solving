function SumOfAllNum(array) {
  if (array === null) return 0;

  const maxNum = Math.max(...array);
  const minNum = Math.min(...array);
  const val = array.filter((x) => x != minNum && x != maxNum);
  const valResult = val.reduce((a, b) => a + b, 0);
  console.log(valResult);
}

// function indiceies(arr,target){
//     let result=[]

// for (let i = 0; i < arr.length; i++) {
//     for (let j = +i; j < arr.length; j++) {
//         if (arr[i]+arr[j]===target) {
//             result.push([i,j])

//         }
//     }
// }

// console.log(result);
// }

// indiceies([8,2,3,5,,5,7,6,9],10)
// function Searchindex(arr,key){
//     let low=0;
//     let heigh=arr.length-1;
//     while(low<=heigh){
//         let mid=Math.floor((low+heigh)/2);
//         if(arr[mid]==key){
//             return mid;
//             }
//             else if(arr[mid]<key){
//                low=mid+1;
//                 }
//                 else{
//                 heigh=mid-1;
//                     }

//     }
//  return low;
// }
// console.log(Searchindex([1, 3, 5, 6], 5));

// var lengthOfLastWord = function (s) {
//   let words = s.trim().split(/\s+/);

//   for (let i = 0; i < words.length; i++) {
//     if (i === words.length - 1) {
//       return (re = words[i].length);
//     }
//   }
// };
// lengthOfLastWord('Hello world')
// console.log(re);

//1010 1011
// var addBinary = function(a, b) {
//     let c=[] ;

//     for(let i=a.lenght;i>0;i--){
//         for(let j=b.lenght;j>=0;j--){
//           if (a[i]===b[j]==0){
//         c.push(0)
//           } else if(a[i]==b[j]==1){
//            c.push(10)

//           } else if(a[i]==b[j]){}
//         }
//     }

// return  c
// };
// addBinary('1010','1011')
// console.log(c);

// var addBinary = function (a, b) {
//   let sum = [];
//   let c = (parseInt(a, 2) + parseInt(b, 2)).toString(2);
//   let carry = 0;

//   for (let i = 0; i < c.length; i++) {
//     current = c[i];

//     if (current == 2) {
//       if (current[c.length - 1] == 2) {
//         sum.push(1, 0);
//       } else {
//         sum.push(0);
//         carry = 1;
//         current[1 + i] = parseInt(current[i + 1]) + caryy;
//       }
//     } else {
//       sum.push(current);
//     }
//   }
//   return sum.join('')
// };
// console.log(addBinary("1010", "1011"));
// var strStr = function(haystack, needle) {
//     let wordone=haystack.split();
//     let wordtwo=needle.split()
//     let arr1=[];
//     let left=0;
//     let right=wordone.length-1;
//     while(haystack.match(needle)){
//  if(laft<right){
//   arr1.push(haystack.slice(left,right+1))
//   left=right+1
//   }else{
//         return -1
//       }
//   return arr1
//   };

//  }

// function strStr(haystack, needle) {
// let c= haystack.indexOf(needle, 0)
// return c
// }
//     console.log( strStr("leetcode", "leeto"))

// var isPalindrome = function(x) {
//   let strg=String(x)
//   let left=0
//   let right=strg.length-1

//   if(x<0)return false
//   while(left<right){

//       if(strg[left]!==strg[right]) {
//         return false;

//       }
//          left++;
//         right--;

//       }
//       return true

//   }

// let left=0
//  let right=strg.length-1
//   while(left<right){
//     if(strg[left]!==val){
//     return  arr.push(nums[2])

//     }
//     left++
//     right--
// }

// var removeElement = function(nums, val) {
//   let left =0
//   let stg=String(nums)
//   let right = stg.length-1
//   let arr=[''];
//  while(left<right){
//   if(stg[left]==val){

//     stg[left]=stg[right]
//     stg[right]=stg[left]
//    return stg
//     }
//     right--
//     left++

//   }

// }
// console.log(removeElement([5,1,2,2,1],5));

// var plusOne = function(digits) {
//  let value=digits.toString().replace(/,/g,"")

// let left=0
// let right=digits.length-1

// if(digits[0]==9){
// digits.pop()
// digits.push(parseInt(digits[0]+1))
// }else if(digits[right]==9&&digits.length>1){

//  for(let i=0;i<digits.length-1;i++){
//  digits.push(digits[i]=0)
//  }
// digits.unshift(1)
// }else{
//   digits.pop()
//  digits.push(parseInt(value[right])+1);

// }

// return digits
// };

var plusOne = function (digits) {
  // let n = digits.length;
  // for (let i = n - 1; i >= 0; i--) {
  //     if (digits[i] < 9) {
  //         digits[i]++;
  //         return digits;
  //     } else {
  //         digits[i] = 0;
  //     }
  // }
  // digits.unshift(1);
  //  return (BigInt(digits.join("")) + BigInt(1)).toString().split("")
};

// var maxProfit = function(prices) {
//   let maxProfit = 0;
//   let minPrice = prices[0];

//   for (let i = 1; i < prices.length; i++) {
//     if (prices[i] < minPrice) {
//       minPrice = prices[i];
//     }

//     const profit = prices[i] - minPrice;

//     if (profit > maxProfit) {
//       maxProfit = profit;
//     }
//   }

//   return maxProfit;
// };

// console.log(maxProfit([7, 1, 5, 3, 6, 4]));
// console.log(maxProfit([7, 6, 4, 3, 1]));

// console.log(maxProfit([1,2]));
// var majorityElement = function(nums) {
//   let counter=2
//   let count=0

// for (let index = 0; index < nums.length; index++) {
//   const element = array[index];

// }

//   }
// console.log(majorityElement([2,3,2,2,4]));
// var twoSum = function(nums, target) {
//     for (let i = 0; i < nums.length; i++) {
//       for (let j = i + 1; j < nums.length; j++) {
//         if (nums[i] + nums[j] === target) {
//           return [i, j];
//           }
//         }

//                 }
// };

// var majorityElement = function (nums) {
//   let numsCopy = {};
//   let inter_val = Math.floor(nums.length/2);
//   for (let index = 0; index < nums.length; index++) {
//    let val=nums[index]
//    numsCopy[val]=(numsCopy[val]||0)+1
//    if(numsCopy[val]>inter_val){
//     return val
//     }
    
//   }
//  return null
 
// };
// console.log(majorityElement([2, 3, 5, 3, 3, 4, 5]));



// var longestCommonPrefix = function(strs) {
//   var prefix =strs[0]
//   for (let index = 1; index < strs.length; index++) {
//   while(strs[index].indexOf(prefix)!==0){
//     prefix=prefix.slice(0,-1)
//    if(prefix==''){
//     return ''
//   }
 
//   }}
 
//      return prefix

// };
//  console.log(longestCommonPrefix(["flgower","flgow","flgight"]));


// class node{
//   constructor(data,next=null){
//     this.data=data
//     this.next=next
//   }
// }
// class linkedlist{
//   constructor(){
//     this.head=null
//     this.size=0
//     }
//     addfirst(data){
//    this.head=new node(data,this.head)
// this.size++
// return this.head
//     }
//     addlast(data){
//       const newnode=new node(data)
//       if(!this.head){
//         this.head=newnode
//        }
//        else{
//         let curr=this.head;
//         while(curr.next){
//           curr=curr.next
//         }
//         curr.next=newnode
//     }}
//     }
//    let  li= new linkedlist()
// console.log( li.addfirst(10));
// console.log( li.addfirst(20));
// console.log( li.addfirst(30));
// console.log(li.addlast(50));

// var mergeTwoLists = function(list1, list2) {
//   let mergedarr=[]
//   let curr1=list1
//   let curr2=list2
//   let li=new linkedlist()
 
//     if(curr1.data<curr2.data){
//      mergeTwoLists=li.addfirst(curr1)
//      for (let i = 0; i < list2.length; i++) {
//       mergeTwoLists.push(li.addlast(list2[i]))
      
//      }      }
      


// return mergeTwoLists
// }
// console.log(mergeTwoLists([1,2,3],[5,3,4]));




//4. Median of Two Sorted Arrays.
var findMedianSortedArrays = function ( nums1, nums2) {
let result=0
  for(let i=0; i<nums2.length;i++){

  nums1.push(nums2[i]);
}
for(let j=0; j<nums1.length-1;j++){
 for(let i=0; i<nums1.length-j-1;i++){
  if (nums1[i]>nums1[i+1]){
    swap=nums1[i]
    nums1[i]=nums1[i+1]
    nums1[i+1]=swap
    
    
  }
 }
}

  if(nums1.length%2==0){
    medin=nums1.length/2
    result= (nums1[medin]+nums1[medin-1])/2;
  }
  else{
      result=nums1[Math.floor((nums1.length/2))]
    }



return result
 
}





  console.log(findMedianSortedArrays([1,3],[2,4,5],)) 