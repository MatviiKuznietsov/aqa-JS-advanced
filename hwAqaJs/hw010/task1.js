function getTextWithDelay (text, milliseconds){
    setTimeout(()=>console.log(text), milliseconds)
}

getTextWithDelay("hello",5000)