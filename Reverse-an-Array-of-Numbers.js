function reverse(n,input){
    let Arr=[];
    for (let i=0;i<n;i++)
    {
        Arr.unshift(input[i]);
    }
    console.log(Arr.join(" "));
}
reverse(3, [10, 20, 30, 40, 50])