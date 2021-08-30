// Write a JavaScript program to replace every character in a given string with the character following it in the alphabet.
function replaceEach(str){
    var new_str = ''
    for(i=0;i<str.length;i++){
        let char_value = str.charCodeAt(i);
        if (char_value === 122){
            char_value = 96;
        }
        char_value += 1;
        //new_str += String.fromCharCode(char_value)
        str = str.replace(str[i], String.fromCharCode(char_value))
    }
    return str
}
var result = replaceEach("sudhanz")
console.log(result)