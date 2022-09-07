let arr = [];
let set = new Set();
const n = 100000;

for (let i = 0; i < n; i++) {
  arr.push(i);
  set.add(i);
}

const j = 33333;

const deleteFromArr = (arr, item) => {
    let index = arr.indexOf(item);
    return index !== -1 && arr.splice(index, 1);
  };

var timeArr = performance.now();
deleteFromArr(arr, j);
console.log('Array', performance.now() - timeArr, 'ms');
// Array 0.14639997482299805 ms

var timeSet = performance.now();
set.delete(j);
console.log('Set', performance.now() - timeSet, 'ms');
// Set 0.016099929809570312 ms