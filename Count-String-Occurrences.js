function solve(text,targetword){
    let words=text.split(' ');
    let count=0;
    while(words.includes(targetword)){
       count++;
       words.splice(words.indexOf(targetword), 1);
    }
    console.log(count);
}
solve('This is a word and it also is a sentence','is')
