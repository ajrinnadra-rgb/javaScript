for (let i = 0; i < 5; i++) {
  console.log(i);
}
let j = 0;
while (j < 5) {
  console.log(j);
  j++;
}
let k = 0;
do {
  //console.log(k); Str:onsubmit;
  k++;
} while (k < 5);
console.log("========");
var sum_1 = 0;
for (let val of [10, 20, 30]) {
  //console.log(val);
  sum_1 += val;
  console.log(sum_1);
}

console.log(sum_1);
console.log("========");
for (let key in { a: 1, b: 2 }) {
  console.log(key);
}
console.log("Velcime");

var sum = 0;
for (let key in {a:1, b:2}) {
  console.log(key, ":", {a:1, b:2}[key]); 
    sum += {a:1, b:2}[key] 
}

console.log(sum)
/*
{a:1, b:2}[key] => {a:1, b:2}[a] => 1
{a:1, b:2}[key] => {a:1, b:2}[b] => 2

*/
// Output:
// a : 1
// b : 2

for (let key in {a:1, b:2}) {
  console.log(key, ":", {a:1, b:2}[key]);


for (let key in {a:1, b:2}) {
  console.log({a:1, b:2}[key]);
} 

//ElementInternals
/*var obj = {

a1, b:2

}*/


