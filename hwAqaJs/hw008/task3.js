const carl = {
    brand: 'BMW',
    model: 'X5',
    year: 1998
}
const car2 = {
    brand: 'Acura',
    model: 'Legend',
    owner: 'Mike'
}
const car3 = {...carl, ...car2}
console.log(car3)