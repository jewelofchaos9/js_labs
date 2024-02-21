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
    if (isNaN(args[i])) {
      throw new Error("NaN if find median")
    }
    sum += args[i] 
  }

  return sum / args.length
}
