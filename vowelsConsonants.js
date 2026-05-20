let a="afsgbgfvdsdfvmbgkmeionukdm134434";
let vowels="", cons="", digits="";
  
    for(let i=0;i<a.length;i++){
    if(a[i]=="a" || a[i]=="e" || a[i]=="i" || a[i]=="o" ||a[i]=="u"){
        vowels+=a[i];
    }
    else if(a[i]>='0' && a[i]<='9'){
            digits+=a[i];
        
    }
    else{
        cons+=a[i];
    }
} 
console.log("vowels : "+vowels);
console.log("digits : "+digits);
console.log("consonants : "+cons);

