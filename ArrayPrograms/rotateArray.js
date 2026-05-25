let arr=[1,2,3,4,5]
let s=3;
n=[],k=0;
for(let i=s+1;i<arr.length;i++){
   n[k]=arr[i];   
   k++;
}
for(let i=0;i<s+1;i++){
    n[k]=arr[i];
    k++;
}

console.log(n);
