function CountByX(x,n){
    let arr=[]
    for(let i=1;i<n;i++){
       arr.push(i*x)
    }
    return arr

}
console.log(CountByX(5,10));