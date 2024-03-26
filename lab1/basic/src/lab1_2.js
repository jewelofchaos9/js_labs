function sortNumbers(arr) {
  if (!Array.isArray(arr)) {
    throw new Error("Work only with arrays")
  }

  arr.forEach(function(elem) {
    if (isNaN(elem)) {
      console.log(elem)
      throw new Error("Cannot sort not numbers")
    }
  })

  return arr.sort()
}

function findResidues(arr) {
  if (!Array.isArray(arr)) {
    throw new Error("Work only with arrays")
  }

  arr.forEach(function(elem, index, array) {
    if (isNaN(elem)) {
      throw new Error("Cannot find residue of NaN")
    }
    array[index] %= 5
  })

  return arr
}

function findMedian(...args) {
  let sum = 0
  for(let i = 0; i < args.length; i++) {
    console.log(args[i])
    if (isNaN(args[i])) {
      throw new Error("NaN in find median")
    }
    sum += Number(args[i])
  }
  console.log(sum)
  console.log(args.length)

  return sum / args.length
}

function checkBrackets(bracketsString) {
  let stack = []
  let brackets = "()"
  let state = true
  bracketsString.split("").forEach(function(elem, index, array) {
    if (!brackets.includes(elem)) {
      state = false 
      return
    }

    if (elem == "(") {
      stack.push(")")
    }

    else {
      if (stack.pop() != elem) {
        state = false
        return 
      }
    }
  })

  return stack.length == 0 && state ? "Правильная" : "Неправильная"
}

function isObject(value) {
  return typeof value == "object" && value != null && !Array.isArray(value)
}

function cloneObject(obj) {
  let clone = {}
  for (let prop in obj) {
    if (isObject(obj[prop])) {
      clone[prop] = cloneObject(obj[prop])
    }
    else if(Array.isArray(obj[prop])) {
      clone[prop] = [...obj[prop]]
    }
    else {
      clone[prop] = obj[prop]
    }
  }

  return clone
}
