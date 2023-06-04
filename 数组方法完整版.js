// eg1:删除元素
let a = [1, 2, 3, 4, 5, 6, 7];
let item = a.splice(0,3) // [1,2,3]
console.log(a)  // [ 4, 5, 6, 7 ]

let item1 = a.splice(-1,3)
console.log(item1)  // [7]

// eg2: 删除并添加
let b = [1, 2, 3, 4, 5, 6, 7]
let bItem = b.splice(0,3,"增加")
console.log(b)  //[ '增加', 4, 5, 6, 7 ]

// eg3: 不删除只添加:
let c = [1, 2, 3, 4, 5, 6, 7]
let cItem = c.splice(0,0,"增加1")
console.log(c)  //[ '增加1', 1, 2, 3, 4, 5, 6, 7 ]
let cItem1 = c.splice(-1,0,"增加")
console.log(c)  // [ '增加1', 1, 2, 3, 4, 5, 6, '增加', 7 ]
