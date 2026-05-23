let arr=[0,1,2,3,4,1,0,0,3,0,1]
let n=[],k=0;
for(let i=0;i<arr.length;i++){
    if(arr[i]!=0){
        n[k]=arr[i];
        k++;
    }
}
s=arr.length-n.length;
for(let i=0;i<s;i++){
    n[k]=0;
    k++;
}
console.log(n);
