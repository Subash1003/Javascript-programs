let s= [8,7,6,9];
for(let i=0;i<s.length-1;i++){
    for(let j=i+1;j<s.length;j++){
        if(s[i]>s[j]){
            let temp=s[i];
            s[i]=s[j];
            s[j]=temp;
        }
    }

}
console.log(s);