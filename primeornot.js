let n=10; let fl=0;
if(n==2){
    console.log("prime");
}
else{
    for(let i=3;i<n;i++){
        if(n%i==0){
            fl=1;
        }
    }
    if(fl==0){
        console.log(n+" is prime");
        
    }
    else{
        console.log(n+" is not prime");
        
    }
}