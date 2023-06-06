// 1. 累加累乘
function Accumulation(...vals) {
  return vals.reduce((t, v) => t + v, 0)
}

function Multiplication(...vals) {
  return vals.reduce((t, v) => t * v, 1)
}

// console.log(Accumulation(1,2,3,4,5))
// console.log(Multiplication(1,2,3,4,5))


// 2. 权重求和
const scores = [
  { score: 90, subject: "chinese", weight: 0.5 },
  { score: 95, subject: "math", weight: 0.3 },
  { score: 85, subject: "english", weight: 0.2 }
];

const result = scores.reduce((t, v) => t + v.score * v.weight, 0)
// console.log(result)

// 3. 代替reverse
function Reverse(arr = []) {
  return arr.reduceRight((t, v) => (t.push(v), t), [])
}
// console.log(Reverse([1, 2, 3, 4, 5]))

// 4. 代替map和filter
const arr = [0, 1, 2, 3];

// 代替map：[0, 2, 4, 6]
const a = arr.map(v => v * 2)
// const b = arr.reduce((t, v) => (t.push(v * 2), t), [])
const b = arr.reduce((t, v) => [...t, v * 2], [])
// console.log(b)

// 代替filter：[2, 3]
const c = arr.filter(v => v > 1);
const d = arr.reduce((t, v) => v > 1 ? [...t, v] : t, [])
// console.log(d)

// 代替map和filter：[4, 6]
const e = arr.map(v => v * 2).filter(v => v > 2);
const f = arr.reduce((t, v) => v * 2 > 2 ? [...t, v * 2] : t, [])
// console.log(f)

// 5. 代替some和every
const scores1 = [
  { score: 45, subject: "chinese" },
  { score: 90, subject: "math" },
  { score: 60, subject: "english" }
]

// 6. 代替some和every
// 代替some：至少一门合格
const isAtLeastOneQualified = scores1.reduce((t, v) => t || v.score >= 60, false)
// console.log(isAtLeastOneQualified)

// 代替every：全部合格
const isAllQualified = scores1.reduce((t, v) => t && v.score >= 60, true)
// console.log(isAllQualified)


// 7. 数组分割
function Chunk(arr = [], size = 1) {
  return arr.length ? arr.reduce((t, v) => (t[t.length-1].length === size ? t.push([v]) : t[t.length-1].push(v), t), [[]]) : []
}
const arrChunk = [1,2,3,4,5,6,7]
// console.log(Chunk())
// console.log(Chunk(arrChunk, 3))

// 8. 数组过滤
function Difference(arr = [], oarr = []) {
  return arr.reduce((t ,v) => (!oarr.includes(v) && t.push(v), t), [])
}
const arrFilter1 = [1,2,3,4,5]
const arrFilter2 = [2,3,6]
// console.log(Difference(arrFilter1,arrFilter2)) // [1,4,5]
// console.log(Difference(arrFilter2,arrFilter1)) // [6]


// 9. 数组填充
function Fill(arr=[], val="", start = 0, end = arr.length) {
  if (start < 0 || start >= end || end > arr.length) return arr 
  return [
    ...arr.slice(0, start),
    ...arr.slice(start, end).reduce((t, v) =>(t.push(val || v), t), []),
    ...arr.slice(end, arr.length)
  ]
}
const arrFill = [0, 1, 2, 3, 4, 5, 6]
// console.log(Fill(arrFill, 12, 2, 5))

// 10. 数组扁平
function Flat(arr=[]) {
  return arr.reduce((t, v) => t.concat(Array.isArray(v) ? Flat(v) : v), [])
}
const arrFlat = [0, 1, [2, 3], [4, 5, [6, 7]], [8, [9, 10, [11, 12]]]];
// console.log(Flat(arrFlat))

// 11. 数组去重
function Uniq(arr = []) {
  return arr.reduce((t, v) => t.includes(v) ? t : [...t, v], [])
}
const arrUniq = [2, 1, 0, 3, 2, 1, 2];
// console.log(Uniq(arrUniq))

// 12. 数组最大最小值
function Max(arr = []) {
  return arr.reduce((t, v) => t > v ? t : v)
}
function Min(arr = []) {
  return arr.reduce((t, v) => t < v ? t : v)
}
const arrM = [12, 45, 21, 65, 38, 76, 108, 43];
// console.log(Max(arrM))
// console.log(Min(arrM))

// 13. 数组成员独立拆解
function Unzip(arr = []) {
  return arr.reduce(
    (t, v) => (v.forEach((w, i) => t[i].push(w)), t),
    Array.from({length: Math.max(...arr.map(v => v.length))}).map(v => [])
  )
}
const arrUnzip = [["a", 1, true], ["b", 2, false]];
// console.log(Unzip(arrUnzip)) //[ [ 'a', 'b' ], [ 1, 2 ], [ true, false ] ]

// 14. 数组成员个数统计
// 此方法是字符统计和单词统计的原理，入参时把字符串处理成数组即可
function Count(arr = []) {
  return arr.reduce((t, v) => (t[v] = (t[v] || 0) + 1, t) , {})
}
const arrCount = [0, 1, 1, 2, 2, 2, 3, 4]
// console.log(Count(arrCount))

// 15. 数组成员位置记录
function Position(arr = [], val) {
  return arr.reduce((t, v, i) => (v === val && t.push(i), t), [])
}
const arrPosition = [2, 1, 5, 4, 2, 1, 6, 6, 7]
// console.log(Position(arrPosition, 2)) // [ 0, 4 ]

// 16. 数组成员特性分组
function Group(arr = [], key) {
  return key ? arr.reduce((t, v) => (!t[v[key]] && (t[v[key]] = []), t[v[key]].push(v), t), {}) : {}
}
const arrGroup = [
  { area: "GZ", name: "YZW", age: 27 },
  { area: "GZ", name: "TYJ", age: 25 },
  { area: "SZ", name: "AAA", age: 23 },
  { area: "FS", name: "BBB", age: 21 },
  { area: "SZ", name: "CCC", age: 19 }
]; // 以地区area作为分组依据
// console.log(Group(arrGroup, "area"))

// 17. 数组成员所含关键字统计
function keyWord(arr = [], keys = []) {
  return keys.reduce((t, v) => (arr.some(w => w.includes(v)) && t.push(v), t), [])
}
const text = [
  "今天天气真好，我想出去钓鱼",
  "我一边看电视，一边写作业",
  "小明喜欢同桌的小红,又喜欢后桌的小君,真TM花心",
  "最近上班喜欢摸鱼的人实在太多了，代码不好好写，在想入非非"
];
const keyword = ["偷懒", "喜欢", "睡觉", "摸鱼", "真好", "一边", "明天"]
// console.log(keyWord(text, keyword)) //[ '喜欢', '摸鱼', '真好', '一边' ]

// 18. 字符串翻转
function ReverseStr(str = "") {
  return str.split("").reduceRight((t, v) => t + v)
}
const str = "reduce最牛逼"
// console.log(ReverseStr(str))

// 19. 数字千分化
function ThousandNum(num = 0) {
  const str = (+num).toString().split(".")
  const int = nums => nums.split("").reverse().reduceRight((t,v,i) => t + (i % 3 ? v : `${v},`), "").replace(/^,|,$/g, "")
  const dec = nums => nums.split("").reduce((t, v, i) => t + ((i + 1) % 3 ? v : `${v},`), "").replace(/^,|,$/g, "")
  return str.length > 1 ? `${int(str[0])}.${dec(str[1])}` : int(str[0])
}

// console.log(ThousandNum(1234))
// console.log(ThousandNum(1234.00)) // 1,234
// console.log(ThousandNum(0.1234))
// console.log(ThousandNum(1234.5678))  // 1,234.567,8

// 20. 斐波那契数列
// console.log([...new Array(10).keys()]) //[ 0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
function Fibonacci(len = 2) {
  const arr = [...new Array(len).keys()]
  return arr.reduce((t, v, i) => (i > 1 && t.push(t[i-1] + t[i-2]), t), [0,1])
}
// console.log(Fibonacci(10)) //[ 0, 1,  1,  2,  3,5, 8, 13, 21, 34]

// 21. URL参数反序列化
function ParseUrlSearch() {
  return location.search.replace(/(^\?)|(&$)/g, "").split("&").reduce((t, v) => {
    const [key, val] = v.split("=")
    t[key] = decodeURIComponent(val)
    return t
  }, {})
}
// 假设URL为：https://www.baidu.com?age=25&name=TYJ
// ParseUrlSearch(); // { age: "25", name: "TYJ" }

// 22. 返回对象指定键值
function GetKeys(obj = {}, keys = []) {
  return Object.keys(obj).reduce((t, v) => (keys.includes(v) && (t[v] = obj[v]), t), {})
}
const target = { a: 1, b: 2, c: 3, d: 4 };
const keyword1 = ["a", "d"]
// console.log(GetKeys(target, keyword1)) //{ a: 1, d: 4 }

// 23. 数组转对象
function arrayToObject(arr = []) {
  return arr.reduce((t, v) =>{
    const {name, ...rest} = v
    t[name] = rest
    return t
  } ,{})
} 
const people = [
  { area: "GZ", name: "YZW", age: 27 },
  { area: "SZ", name: "TYJ", age: 25 }
]
// console.log(arrayToObject(people))

// 24. Redux Compose函数原理
function Compose(...funs) {
  if(funs.length === 0) {
    return arg => arg  
  }
  if(funs.length === 1) {
    return funs[0]
  }
  return funs.reduce((t, v) => (...arg) => t(v(...arg)))
}
