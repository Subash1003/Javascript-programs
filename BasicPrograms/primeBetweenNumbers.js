 let a=1;
let b=50;
let fl=0;
let count=0;
for(let i=2;i<=b;i++){
    for(let j=2;j<i;j++){
        if(i%j==0){
            fl=1;
        }
    }
    if(fl==0){
        count++;
        console.log(i);
    }
    fl=0;
}
console.log( "total prime numbers btw 1-50 "+count);
