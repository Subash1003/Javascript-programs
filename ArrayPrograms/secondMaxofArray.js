let arr=[1,2,3,4,5]
let max=-1,smax=-1;
for(let i=0;i<arr.length;i++){
    if(arr[i]>max ){
        smax=max;
        max=arr[i];
    }
    else if(arr[i]<max && arr[i]>smax){
        smax=arr[i];
    }
}
console.log("max element "+max);
console.log("second max element "+smax);
