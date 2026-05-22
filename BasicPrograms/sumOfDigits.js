let a=12345;
let b=0,sum=0;
while(a>0){
    b=a%10;
    console.log(b+"    %10")
    sum+=b;
    a=Math.floor(a/10);
    console.log(a+"   /10");
    
}
console.log(sum);
