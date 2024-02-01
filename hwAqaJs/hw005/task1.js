function getAreaDeclaration(width, height) {
    return width * height
}

const getAreaExpression = function (width, height) {
    return width * height
}
const getAreaArrow = (width, height) => {
    return width * height
}
const getAreaConciseArrow = (width, height) => width * height
console.log('Area = ', getAreaDeclaration(5, 7))
console.log('Area = ', getAreaExpression(5, 9))
console.log('Area = ', getAreaArrow(2, 9))
console.log('Area = ', getAreaConciseArrow(2, 4))