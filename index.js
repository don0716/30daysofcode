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
  console.log(revNum)
}

reverseNum('12340')