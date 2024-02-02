const showNumber = (num) => {
    if (num > 0) {
        console.log(num)
        showNumber(num - 1)
    }
}
showNumber(7)