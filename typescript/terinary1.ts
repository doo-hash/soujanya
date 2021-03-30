let a:number=5, b=15,c=12,d=10,max;
max=(a>b&&a>c&&a>d)?a:(b>c&&b>d)?b:((c>d)?c:d);
console.log("Max-value :",max);