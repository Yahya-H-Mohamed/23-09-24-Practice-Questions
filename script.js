/*
Question 1 

In this little assignment you are given a string of space separated numbers, and have to return the highest and lowest number.

Examples:
highAndLow("1 2 3 4 5");  // return "5 1"
highAndLow("1 2 -3 4 5"); // return "5 -3"
highAndLow("1 9 3 4 -5"); // return "9 -5"

Notes:
All numbers are valid Int32, no need to validate them.
There will always be at least one number in the input string.
Output string must be two numbers separated by a single space, and highest number is first.
*/

function highAndLow(numbers){
  let list = numbers.split(" ")
  let numbersArr = []
  list.map((number) =>{
    numbersArr.push(Number(number))
  })
  let maxNum = Math.max(...numbersArr)
  let minNum = Math.min(...numbersArr)
             
  return String(maxNum) + " " + String(minNum)
}

/*
Question 2

The cockroach is one of the fastest insects. Write a function which takes its speed in km per hour and returns it in cm per second, rounded down to the integer (= floored).

For example:
1.08 --> 30

Note:
The input is a Real number (actual type is language dependent) and is >= 0. The result should be an Integer.
*/

function cockroachSpeed(s) {
  return Math.floor(s * 27.7778)
}

/*
Question 3

Debugging sayHello function
The starship Enterprise has run into some problem when creating a program to greet everyone as they come aboard. It is your job to fix the code and get the program working again!

Example output:
Hello, Mr. Spock
*/

function sayHello(name) {
  return `Hello, ${name}`
}

/*
Question 4

In this simple Kata your task is to create a function that turns a string into a Mexican Wave. You will be passed a string and you must return that string in an array where an uppercase letter is a person standing up. 

Rules:
 1.  The input string will always be lower case but maybe empty.

 2.  If the character in the string is whitespace then pass over it as if it was an empty seat

Example:
wave("hello") => ["Hello", "hEllo", "heLlo", "helLo", "hellO"]
*/

function wave(str){
  let waveArr = []
  for (i = 0; i < str.length; i++){
    if (str[i] != " "){
     waveArr.push(str.slice(0,i) + str[i].toUpperCase() + str.slice(i+1)) 
    }
  }
  return waveArr
}