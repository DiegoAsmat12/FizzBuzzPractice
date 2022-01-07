for(let i=1;i<=100;i++){
    let fizzbuzzText="";
    if(i%3===0){
        fizzbuzzText+="Fizz"
    }
    if(i%5===0){
        fizzbuzzText+="Buzz"
    }
    if(fizzbuzzText){
        console.log(fizzbuzzText);
    }
    else{
        console.log(i);
    }
}