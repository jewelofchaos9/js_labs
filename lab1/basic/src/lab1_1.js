function getMonth(number) {
  if (isNaN(number) || number < 1 || number > 12) {
    return 'Wrong number'
  } 

  switch(number) {
    case 1: return "Jan"
    case 2: return "Feb"
    case 3: return "Mar"
    case 4: return "Apr"
    case 5: return "May"
    case 6: return "Jun"
    case 7: return "Jul"
    case 8: return "Aug"
    case 9: return "Sep"
    case 10: return "Oct"
    case 11: return "Nov"
    case 12: return "Dec"
  }
}

function getPrimes(number) {
  if (isNaN(number) || number < 0) {
    return 'Wrong number'
  }

  let primes = []
  while (primes.length < number) {
    primes.push(2)
  }

  return primes.join(' ')
}

let Counter = {
  count: 0,
  add: function(num) {
    if (isNaN(num)) {
      throw new Error("wrong number")
    }
    this.count += num
  },

  sub: function(num) {
    if (isNaN(num)) {
      throw new Error("wrong number")
    }
    this.count -= num
  },
}

function changeDelimeter(str) {
  console.log(str)
  return str.split(',').join('.')
}

function checkPalindrome(str) {
  let reversed = str.split("").reverse().join("");

  return reversed == str ? "Да" : "Нет"
}
