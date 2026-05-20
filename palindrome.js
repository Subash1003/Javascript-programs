let a=333;
let b=a,c=0,rev=0;
while(b>0){
    c=b%10
    rev=rev*10+c;
    b=Math.floor(b/10)
}
if(rev==a){
    console.log(a+" is palindrome");
    
}
else{
    console.log(a+" is not palindrome");
    
}