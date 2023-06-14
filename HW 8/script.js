// Задача 1 

function showNumbers(num1, num2) {
  const max = Math.max(num1, num2)
  const min = Math.min(num1, num2)
  for (let i = max; i >= min; i--) {
    if (i % 2 == 0) {
      console.log(i)
    }
  }
}
showNumbers(20, 5)


// Задача 2 

function power(number, exponent = 2) {
    return number ** exponent
}
console.log(power(10))

// Задача 3

function PrintSum(n) {
    let sum = 0

    for(let i = 0; i <= n; i++) {
        sum += i
    }
    return sum
}
console.log(PrintSum(10))


// Задача 4

function calculateEvenOddSum(n, m) {
    let evenSum = 0
    let oddSum = 0
  
    for (let i = n; i < m; i++) {
      if (i % 2 == 0) {
        evenSum += i
      } else {
        oddSum += i
      }
    }
    
    console.log(evenSum)
    console.log(oddSum)
  }
calculateEvenOddSum(2, 30)

// Задача 5 

function findString(strings) {
  if (strings.length == 0) {
    return null
  }

  let longestString = strings[0]

  for (let i = 1; i < strings.length; i++) {
    if (strings[i].length > longestString.length) {
      longestString = strings[i]
    }
  }

  return longestString;
}

const strings = ['one', 'two', 'three'];
console.log(findString(strings));