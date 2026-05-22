let arr=[10,20,40,60,50,45];
let a=6,c=0;
for(let i=0; i<arr.length;i++){
    if(arr[i]==a){
      c=1;
    }
}
if(c==1){
    console.log(a+" is present in the array");
}
else{
    console.log(a+" is not present in the array");
}