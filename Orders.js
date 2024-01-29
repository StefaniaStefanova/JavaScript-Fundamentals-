function solve(type,price){
    let newPrice;
    if (type==="coffee"){
       newPrice=price*1.50
       console.log(`${newPrice.toFixed(2)}`)
    }
    else if (type==="water"){
        newPrice=price*1.00
        console.log(`${newPrice.toFixed(2)}`)
     }
     else if (type==="coke"){
        newPrice=price*1.40
        console.log(`${newPrice.toFixed(2)}`)
     }
     else if (type==="snacks"){
        newPrice=price*2.00
        console.log(`${newPrice.toFixed(2)}`)
     }
 
}
solve("water",3)