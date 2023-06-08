// 1
// Given a number, return the reverse of that number.
// Input format
// One line of input containing an integer N, the number to be reversed.

// Output format
// Return the reversed number. Note that the number must start with (1-9) digits only unless it is a single digit number.

function reverseNum(n) {

  let numStr = n.toString()
  let revNum = 0;

  for(let i=numStr.length-1; i>=0; i--){
    revNum = revNum*10 + (numStr[i] - '0')
    
  }
  console.log("1:: ",revNum)
}

reverseNum('12340')

// 2   Given an array of n elements and an integer x,find the index where x is present in the array. If there are multiple occurrences, find the leftmost one. If x is not present, return -1.

// Input format
// There are three lines of input.

// First line contains integer n.

// Second line contains n space separated integers representing the array.

// Third line contains the value of x.

// Output format
// An integer representing the index of x in the array.


function findElement(arr, x, n){
  let counter = 0
  for(let i=0; i<arr.length; i++){
    if(x === arr[i]){
      return console.log("2:: index: ", i)
    } else {
      counter = counter + 1;
    }
    if(counter === n){
      return console.log("2: -1")
    }
  }
  
}

findElement([2, 3, 4, 5, 6, 2], 6, 6) //(arr, x, n)

// 3. Given the heights of n students of a class, find the average height. Your answer should be accurate upto 5 decimal places.

// Input format
// There are two lines of input.

// First line contains an integer n,the number of students.

// Second line contains n space-separated decimal numbers - The array with the heights of the students.

function avgHeight(n, arrOfStudentsHeight) {
  let sum = 0;
  let avg = 0;

  
  for(let i=0; i<arrOfStudentsHeight.length; i++){
    sum = sum + arrOfStudentsHeight[i]
  }
  avg = sum/n
  console.log("3:: avgHeightOfStudentsInClass:: ", parseFloat(avg).toFixed(5))
}

avgHeight(6, [2.2, 1, 3, 1.9, 2.4, 1.7]) //(number of students, arr of student heights)


// 4. Given an array of n integers, find the maximum element in the given array.

// Note : Do not use any inbuilt functions that find the maximum element directly.

// Input format
// There are two lines of input

// First line contains the integer n.

// Next line contains n space separated integers.

// Output format
// Print the maximum element in the array.

// Sample Input 1
// 5

// 1 2 3 1 2

// Sample Output 1
// 3

function maxNum(n, arr) {
  let max=0;
  for(let i=0; i<arr.length; i++){
    if(arr[i] > max){
      max = arr[i]
    }
  }
  return console.log("4:: maxNum: ", max)
}

maxNum(5 ,[1, 2, 3, 1, 3])





//5. Given a paragraph of words, capitalise the first character of each word and return the updated paragraph.

// Note : No inbuilt function such as split() to be used.

// Input format
// One line of input which contains a string, the paragraph.

// Output format
// Return the paragraph after capitalising each word.

// Sample Input 1
// the quick Brown fox jumps over The lazy dog.

// Sample Output 1
// The Quick Brown Fox Jumps Over The Lazy Dog.


function capitaliseFirstChar(para){

  let words = para.split(" ")
  let capitalisedWords = []

  for(let i=0; i<words.length; i++){
   let capitalisedWord = words[i].charAt(0).toUpperCase() + words[i].slice(1)
    capitalisedWords.push(capitalisedWord)
  }
  // console.log(capitalisedWords)
  return console.log("5:: (using Inbuilt functions) ",capitalisedWords.join(" "))

  // console.log(words[1].charAt(0).toUpperCase())
  
}

capitaliseFirstChar("the quick Brown fox jumps over The lazy dog")




// TIME COMPLEXITY - An estimation of time wrt input, helps us understand how the execution time increases as the input size grows
// the time complexity of the above problem is 0(n) because it involves iterating through the array once to find the max element in the array.


// 6:: Given a string, count the total number of vowels present in that string.

// Note: The string contains uppercase and lowercase english alphabets only.

// Input format
// One line of input, which contains the given string.

// Output format
// Print the total number of vowels.

// Sample Input 1
// language

// Sample Output 1
// 4

// Explanation 1
// There are a total of 4 vowels in the string "language" i.e. 'a', 'u', 'a', 'e'.

// Constraints
// 0 < Length of string < 100

function countVowels(input) {

  let str = input.toString()
  let counter = 0;

  if(str.length <= 0 || str.length > 100) {
    console.log("6:: Input invalid")
  } else {
    for(let i=0; i<str.length; i++){
    if(str[i] === "a" || str[i] ===  "e" || str[i] ===  "i" || str[i] ===  "o" || str[i] === "u") {
      counter = counter + 1
  }
  }
    console.log("6:: No. of Vowels in sentence = ", counter)
  }
}


countVowels("language")

// 7::  A palindrome is any word which reads the same from left to right and right to left.

// Example:

// "racecar" when reversed is still “racecar”, hence it is a palindrome

// "alpha" when reversed is “ahpla" which is not the same as “alpha”, hence not a palindrome.


// To make any word a palindrome, we can simply attach the reversed word after the original word.

// Example: "alpha" when reverses is “ahpla” which is not a palindrome, BUT if we attach the two strings together they become “alphaahpla” which is a palindrome.


// Design a class (or constructor function) named WordKit which can check if a word is a palindrome or not, and also make any word a palindrome if the user wants. It should have the following member methods

// reverse(str) - method to return the reversed string of the passed string str

// isPalindrome(str) - check if the passed str is a palindrome or not. Returns true if str is palindrome, false otherwise.

// makePalindrome(str) - converts the passed string into a palindrome and returns the new string.


function checkIfPalindrome(str){
  // console.log(str.split(""))
  let strArr = str.split("")
  let reversedStrArr = []
  for(let i=str.length - 1; i>=0; i--){
    reversedStrArr.push(strArr[i])
    // console.log(strArr[i])
  }
  // console.log(reversedStrArr.join(""))

  let reversedStr = reversedStrArr.join("")

  if(reversedStr === str){
    console.log("7:: string is a palindrome")
  } else {
    console.log("7:: string is not a palindrome")
  }
  
}

checkIfPalindrome("racecard")