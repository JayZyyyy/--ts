const compose = (...fns) => (...args) => fns.reduceRight((val, fn) => fn.apply(null, [].concat(val)), args)


const f = x => x + 1
const g = x => x * 2
const t = (x,y) => x + y

let fgt = compose(f, g, t)
console.log(fgt(1,2))
