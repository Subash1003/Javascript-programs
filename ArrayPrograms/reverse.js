let s=["a","b","c","d"];
let first=0,last=s.length-1;
while(first<last){
    let temp=s[first]
    s[first]=s[last]
    s[last]=temp
    first++
    last--
}

console.log(s);
console.log(typeof(s));
