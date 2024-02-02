function handleNum(number, handleEven, handleOdd) {
    number % 2 === 0 ? handleEven() : handleOdd()
}

const handleEven = () => console.log("number is even")

const handleOdd = () => console.log("number is odd")

handleNum(6, handleEven, handleOdd)