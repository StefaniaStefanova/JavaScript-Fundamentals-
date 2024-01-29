function solve(input){
    let even=0;
    let odd=0;
    for(let i=0;i<input.length;i++){
       let current=Number(input[i]);
       if(current %2==0){
        even+=current
       }
       else if(current%2!=0){
         odd+=current}
       
    }
    console.log(even-odd);
}
solve([1,2,3,4,5,6]);