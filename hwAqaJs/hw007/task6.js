const numberList = [1, 10, 14, 2, 4, 5, 43, 34]
const copyNumberList = structuredClone(numberList)
copyNumberList.sort((a, b) => a - b)
console.log("Original array ", ...numberList)
console.log("Copy of original array ", ...copyNumberList)