//Write a JavaScript program to compute the sum of the two given integers. If the two values are same, then returns triple their sum.
function getDouble(first, second){
    if(first === second){
        return first * 3
    }
    else return first + second
}
console.log(getDouble(1, 9))