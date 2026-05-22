let arr=[1,2,3,4,5,6,7,8,9,10]
let even=[],odd=[];
for(let i=0;i<arr.length;i++){
    if(arr[i]%2==0){
        even.push(arr[i]);
    }
    else{
        odd.push(arr[i]);
    }
}
console.log("Original array "+arr);
console.log( "Even numbers "+even);
console.log("Odd numbers "+odd);
