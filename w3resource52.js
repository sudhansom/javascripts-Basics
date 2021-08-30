function orderAlphabet(str){
    return str.split('').sort().join('')
}
var result = orderAlphabet("python")
console.log(result)