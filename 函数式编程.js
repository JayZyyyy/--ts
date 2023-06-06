// const compose = (...fns) => (...args) => fns.reduceRight((val, fn) => fn.apply(null, [].concat(val)), args)


// const f = x => x + 1
// const g = x => x * 2
// const t = (x,y) => x + y

// let fgt = compose(f, g, t)
// console.log(fgt(1,2))

function Reverse(arr = []) {
  return arr.reduceRight((t, v) => (t.push(v), t), []);
}

// (t, v) => (t.push(v), t) 逗号运算符 返回后面的t
console.log(Reverse([1, 2, 3, 4, 5])); // [5, 4, 3, 2, 1]

const arr = [0, 1, 2, 3];

// 代替map：[0, 2, 4, 6]
const a = arr.map(v => v * 2);
const b = arr.reduce((t, v) => [...t, v * 2], []);

const c = arr.reduce((t,v) => v * 2 > 2 ? [...t, v * 2]: t, [])
console.log(c)
