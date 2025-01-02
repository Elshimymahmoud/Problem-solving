function GetOpposite(n){
    if(n == 0) return null
    else{
        return n *-1;
    }
}
function NegativeNum(n){
    return n>0?-n:n;
}
console.log(GetOpposite(5));
console.log(NegativeNum(3));