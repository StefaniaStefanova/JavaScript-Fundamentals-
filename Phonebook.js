function some(input){
    let uniqueName={};
    input.forEach(element => {
        let keyvaluepair=element.split(" ") ;
        let key=keyvaluepair[0];
        let value=keyvaluepair[1];
        uniqueName[key]=value;
            
        
    });
    for(let key in uniqueName){
        console.log(`${key} -> ${uniqueName[key]}`)
    }
}
some(['Tim 0834212554',

'Peter 0877547887',

'Bill 0896543112',

'Tim 0876566344'])