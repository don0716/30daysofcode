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




// TIME COMPLEXITY - An estimation of time wrt input, helps us understand how the execution time increases as the input size grows
// the time complexity of the above problem is 0(n) because it involves iterating through the array once to find the max element in the array.