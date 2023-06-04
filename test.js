const programmerOutput = [
  {
    name: 'Uncle Bobby',
    linesOfCode: 500
  }, {
    name: 'Suzie Q',
    linesOfCode: 1500
  }, {
    name: 'Jimmy Gosling',
    linesOfCode: 150
  }, {
    name: 'Gracie Hopper',
    linesOfCode: 1000
  }
];

// var totalOutput = programmerOutput
//   .map((programmer) => programmer.linesOfCode)
//   .reduce((acc, linesOfCode) => acc + linesOfCode, 0);
var totalOutput = programmerOutput.map((program) => program.linesOfCode).reduce((acc, linesOfCode) => acc += linesOfCode,0)

// console.log(totalOutput)


var Employee = (function() {
  function Employee(name){
    this.getName = function() {
      return name
    }
  }
  return Employee
}())

// var employee = new Employee("Jay Z")
// console.log(employee.getName())
// delete employee.name
// console.log(employee.getName())


var add = function(x) {
  return function(y) {
    console.log(y)
    return x + y;
  }
}
const increment = add(5)

console.log(increment(2))
console.log(increment(3))
