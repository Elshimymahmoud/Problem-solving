//given Array of srtings ['boda','nopa','needel']
//return needel + it's index in arr
function FindNeedle(arr){
 return   arr.map((m)=> {
        if(m==='needle'){
            return   m + ' is at index ' + arr.indexOf(m);
                      
    }})
}
console.log(FindNeedle(['boda','nopa','needle']));
