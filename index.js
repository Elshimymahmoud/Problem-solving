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

var lengthOfLastWord = function (s) {
  let words = s.trim().split(/\s+/);
  for (let i = 0; i < words.length; i++) {
    if (i === words.length - 1) {
      return (re = words[i].length);
    }
  }
};

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

var addBinary = function (a, b) {
  let sum = [];
  let c = (parseInt(a, 2) + parseInt(b, 2)).toString(2);
  let carry = 0;

  for (let i = 0; i < c.length; i++) {
    current = c[i];

    if (current == 2) {
      if (current[c.length - 1] == 2) {
        sum.push(1, 0);
      } else {
        sum.push(0);
        carry = 1;
        current[1 + i] = parseInt(current[i + 1]) + caryy;
      }
    } else {
      sum.push(current);
    }
  }
  return sum.join('')
};
console.log(addBinary("1010", "1011"));
