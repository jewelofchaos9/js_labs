function incrementClickCounter() {
  let clickCounter = localStorage.getItem('clickCounter')
  let startTime = localStorage.getItem('startTime')

  if (startTime == null) {
    startTime = (new Date()).getTime()
    localStorage.setItem('startTime', startTime)
  }


  if (clickCounter != null) {
    clickCounter = Number(clickCounter)
    localStorage.setItem('clickCounter', clickCounter + 1)
  } else {
    clickCounter = 1
    localStorage.setItem('clickCounter', 1)
  }

  timeSpent = (new Date()).getTime() - startTime
  if (timeSpent == 0) {
    timeSpent = 1
  }
  
  if (timeSpent > 60) {
    localStorage.setItem('startTime', (new Date()).getTime())
  }

  
  localStorage.setItem('avgClicks', clickCounter/timeSpent)
}

function getNumberOfClicks() {
  let count = localStorage.getItem('clickCounter')
  if (count == null) {
    return 0
  }

  return count
}

function getAvgClicks() {
  let avgClicks = localStorage.getItem('avgClicks')
  if (avgClicks == null ) {
    return 0
  }

  return avgClicks
}

function updateClickerStats() {
  prevPar = document.getElementById("clicker_statistics")
  if (prevPar != null) {
    prevPar.remove()
  }

  const par = document.createElement("p")
  par.id = "clicker_statistics"
  const node = document.createTextNode("Number of your clicks: " + getNumberOfClicks() + "; avg clicks = " + getAvgClicks())

  par.appendChild(node)
  var elem = document.getElementById("clicker")
  elem.appendChild(par)
}
