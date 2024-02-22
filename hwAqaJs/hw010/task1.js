function printTextWithDelay (text, milliseconds){
    setTimeout(()=>console.log(text), milliseconds)
}

printTextWithDelay("hello",5000)