const showNumber = (num) => {
    console.log(num)
    if (num > 0) {
        showNumber(num - 1)
    }
}
showNumber(7)