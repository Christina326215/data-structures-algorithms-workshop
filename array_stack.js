let a = [1];
for (let i=1; i<=5; i++){
  a[i-1] = i;
  console.log("in",a);
}
// console.log("out",a);

let b = a;

for (let i=5; i>=2; i--){
  b[i-1] = i;
  delete b[i-1];
  (b.length)--;
  console.log("in",b);
}
// console.log("out",b);
