let arr=[1,1,2,3,4,2,2,3,5,3,6,7,5]
let n=[], k=0;
for(let i=0;i<arr.length;i++){
    let find=false;
    for(let j=0;j<n.length;j++){
        if(arr[i]==n[j]){
            find=true;
            break;
        }
    }
    if(find==false){
        n[k]=arr[i]
        k++;
    }
}

console.log(n);
