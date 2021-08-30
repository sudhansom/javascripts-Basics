// Write a JavaScript program to capitalize the first letter of each word of a given string. 
function capitalizeFirst(str){
    let str_array = str.split(' ')
    console.log(str_array)
    for (let i=0; i<str_array.length;i++){
        str_array[i] = str_array[i][0].toUpperCase()+ str_array[i].substring(1)
    }
    str = str_array.join(' ')
    return str
}
let result = capitalizeFirst('i am a boy')
console.log(result)
let str = "abcd"
console.log(str.substring(2))