let n=122548451;
let max=0,b=0;
while(n>0){
    b=n%10;
    if(b>max){
        max=b;
    }
    n=Math.floor(n/10);
}
console.log("max of digit is "+max);
