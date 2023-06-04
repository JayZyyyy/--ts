// 1. 数组扁平化
var arr1 = [1,2,3,[4,5,[6,7,8]]]
// console.log(arr1.flat(Infinity))
function flatten(arr) {
  while(arr.some( item => Array.isArray(item))) {
    arr = [].concat(...arr)
  }
  return arr
}

// 2. 去重
var arr2 = [1,2,3,3]
arr_2 = [...new Set(arr2)]
// console.log(arr_2)
var arr3 = [1,2,3,4,4]
arr_3 = Array.from(new Set(arr3))
// console.log(arr_3)


// 3. 排序
var arr4 = [1,2,4,3,8,5]
// console.log(arr4.sort())  // 升序
// console.log(arr4.sort((a, b) => b - a)) // 降序

// 4.求和
const res = arr4.reduce((prev, cur, curIndex, arr) => {
  return prev + cur
})
// console.log(res)

// 合并
var arr5 = [1,2,3,4]
var arr6 = [5,6,7,8]
// arr1.concat(arr2)

const arr7 = [...arr5, ...arr6]
// console.log(arr7)


// 判断是否包含值
var arr1 = [1,2,3,4]
arr1.includes(1) // true 或 false
arr1.indexOf(0) // 该元素在数组内的位置 或者 -1
arr1.find((item) => item === 1) //返回该元素 或者 undefined
arr1.findIndex((item) => item === 1) //返回该元素所在位置 或者 -1


// 类数组转换
Array.prototype.slice.call(arguments)
Array.prototype.slice.apply(arguments)
Array.from(arguments)
const arg = [...arguments]

// 每一项设默认值
var array1 = [1,2,3,4]
// console.log(array1.fill('1'))

// 每一项是否满足
var array2 = [1,2,3,4]
array2.every(item => {
  return item > 0
}) //true

// 有一项满足
var array3 = [1,2,3,4]
array3.some(item => {
  return item > 4
}) //false

// 过滤数组
var arr1 = [1,2,3,4]
arr1.filter(item => {
  return item > 2
}) //[3, 4]

// 对象和数组的转换
var obj = {
  name: '张三',
  age: '12'
}
// console.log(Object.keys(obj))
// console.log(Object.values(obj))
// console.log(Object.entries(obj))

// 对象转换为数组
var array4 = []
for(const key in obj) {
  if(obj.hasOwnProperty(key)) {
    let obj_ = {}
    obj_[key] = obj[key]
    array4.push(obj_)
  }
}
// console.log(array4) // [{name: '张三'}, {age: '12}]


// 数组过滤
let filterArr = [1,2,3,4]
let filterArr2 = filterArr.filter(item => item === 1)
let filterArr5 = filterArr.find(item => item === 1)
console.log(filterArr2, filterArr5)

let filterArr3 = [
  { id:1, name: "aa"},
  { id:2, name: "bb"}
]
let filterArr4 = filterArr3.filter(item => item.id === 1)
let filterArr6 = filterArr3.find(item => item.id === 1)
console.log(filterArr4, filterArr6)
// find() 对于空数组，函数是不会执行的。

// some 用于检测数组中的元素是否满足指定条件
// 会依次执行数组的每个元素-如果有一个元素满足条件(即只要有条件满足即可相当于或)，则表达式返回true , 剩余的元素不会再执行检测
let someArr1 = [1,2,3,4]
let someArr2 = someArr1.some(item=>item === 1)
console.log(someArr2, 'someArr1')

// 过滤出包含特定关键词的字符串
const strings = ['JavaScript', 'Python', 'Java', 'C++', 'Ruby'];
const keyword = 'Java';
const filteredStrings = strings.filter(str => str.includes(keyword));
console.log(filteredStrings);


// 过滤出数组中唯一的元素
const numbers = [1, 2, 3, 2, 4, 5, 1, 6, 6, 4];
const uniqueNumbers = numbers.filter((num, index, arr) => arr.indexOf(num) === index);
console.log(uniqueNumbers);
// filter() 方法遍历数组 numbers 中的每个元素。
// 对于每个元素，回调函数使用 indexOf() 方法来查找该元素在数组中的第一个出现位置的索引。
// 如果当前元素的索引与其第一次出现的索引相同（即 arr.indexOf(num) === index），则返回 true，该元素将被保留在过滤后的数组中。
// 如果当前元素的索引与其第一次出现的索引不同，则返回 false，该元素将被过滤掉。
// 最终，filter() 方法返回由唯一元素组成的新数组。
