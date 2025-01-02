function SumOfAllNum(array){
    if (array===null) 
        return 0;
 
const maxNum=Math.max(...array);
const minNum=Math.min(...array);
  const val= array.filter((x)=>x!=minNum&&x!=maxNum)
   const valResult=val.reduce((a,b)=>a+b,0);
   console.log(valResult);
    }

SumOfAllNum([1,2,3,4,5,6,7])
