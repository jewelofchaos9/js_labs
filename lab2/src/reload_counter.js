function incrementReloadCounter() {
  let reloadCounter = localStorage.getItem('reloadCounter')

  if (reloadCounter != null) {
    reloadCounter = Number(reloadCounter)
    localStorage.setItem('reloadCounter', reloadCounter + 1)
  } else {
    localStorage.setItem('reloadCounter', 1)
  }
}

window.onload = function() {
  incrementReloadCounter()
}

function getNumberOfReloads() {
  let count = localStorage.getItem('reloadCounter')
  if (count == null) {
    return 0
  }

  return count
}
