let arr = [];
let set = new Set();
const n = 100000;

for (let i = 0; i < n; i++) {
  arr.push(i);
  set.add(i);
}

var timeArr = performance.now();

result = arr.indexOf(44896) !== -1;
console.log('Array', performance.now() - timeArr, 'ms');
// Array 0.15259981155395508 ms

var timeSet = performance.now();

result = set.has(44896);
console.log('Set', performance.now() - timeSet, 'ms');
// Set 0.028600215911865234 ms