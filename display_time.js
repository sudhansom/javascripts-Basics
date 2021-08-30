//  Write a JavaScript program to display the current day and time in the following format.
//  Sample Output : Today is : Tuesday.
// Current time is : 10 PM : 30 : 38

var today = new Date();
var day = today.getDay();
var day_list = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
console.log(day_list[day], today)
var hours = today.getHours()
var minutes = today.getMinutes()
var seconds = today.getSeconds()
var month = today.getMonth() + 1
var yyyy = today.getFullYear()
var prepand = (hours >= 12)? "PM" : "AM";
hours = (hours >= 12)? hours - 12 : hours;
console.log(`Current time is ${hours} : ${minutes} : ${seconds} ${prepand}  month: ${month} of ${yyyy}`)
