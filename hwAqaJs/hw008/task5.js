const users = [
    {name: 'John', email: 'John@mail.com', age: 15},
    {name: 'Mike', email: 'Mike@mail.com', age: 35},
    {name: 'Boby', email: 'Boby@mail.com', age: 22}
]
for (const {name, email, age} of users) {
    console.log("Name - ", name, '\nEmail - ', email, '\nAge - ', age, '\n=======================')
}