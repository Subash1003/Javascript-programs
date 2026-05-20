let s="Hello";
let og="";
for(let i=0;i<s.length;i++){
   let c=0;
   for(let j=0;j<s.length;j++){
        if(s[i]==s[j]){
            c++;
        }
   }
   if(c==1){
       og+=s[i];
   }
  
}
console.log(og);


// let a="hello"
// console.log(a[1])
