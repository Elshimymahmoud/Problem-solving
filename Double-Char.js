function DoubleChar(arr){
return arr.split('').map((eo)=>eo.repeat(2)).join('')

}
console.log(DoubleChar('boda'));
//boda
//b o d a
// map into every char 
// repeat 2 times
// join them