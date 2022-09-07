let arr = [];
let set = new Set();
const n = 100000;

for (let i = 0; i < n; i++) {
  arr.push(i);
  set.add(i);
}

const j = 123456;

var timeArr = performance.now();
arr.push(j);
console.log('Array', performance.now() - timeArr, 'ms');
// Array 0.011499881744384766 ms

var timeSet = performance.now();
set.add(j);
console.log('Set', performance.now() - timeSet, 'ms');
// Set 0.006400108337402344 ms