const numbers = [1, 2, 3, 4, 5]
let newArray = numbers.map((num, index) => num * index)
console.log("New array = ", ...newArray)