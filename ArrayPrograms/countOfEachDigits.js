let a = [1,1,2,2,3,3,3,4,5,-1]
for (let i = 0; i < a.length; i++) {
    let c = 1;
        for (let j = i + 1; j <= a.length; j++) {
                if(a[i]==a[j]){
                    c++;
                    a[j]='*';
                }
        }
    if(a[i]!='*')
    console.log(a[i]+" = "+c);

}