function digitsize(n){
 return n.toString().split("").map((x) =>Number(x)).reverse()
}
console.log(digitsize(12345)); // [5, 4, 3, 2,1]