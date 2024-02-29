function appendErrorMessage() { 
  const div = document.getElementById("images_sync")
  const p = document.createElement("p")
  const errorText = document.createTextNode("Can't load image")
  p.appendChild(errorText)
  
  div.appendChild(p)
} 

function loadImageSync(imageHref) {
  return new Promise(function(resolve, reject) {
    let img = new Image()
    img.src = imageHref
    img.onload = () => resolve(img)
    img.onerror = () => reject(new Error("Cannot load image"))
  })
}

function appendImage(image) {
  const div = document.getElementById("images_sync")
  div.appendChild(image)
}

function buttonImageSync() {
  for(i = 0; i < 5; i++) {
    imgHref = prompt()
    loadImageSync(imgHref).then(
      function(result) { appendImage(result) },
      function(error) { appendErrorMessage()}
    )
  }
}

function buttonImageSyncWithoutWait() {
  promises = []
  picturesCount = 5
  for(i = 0; i < picturesCount; i++) {
    imgHref = prompt()
    promises.push(loadImageSync(imgHref))
  }
  
  Promise.allSettled(promises).then(
    function(result) { 
      result.flatMap(x => {
        if (x.status == 'fulfilled') {
          console.log('kek')
          appendImage(x.value)
        } else {
          appendErrorMessage()
        }
        console.log(x)
      })
    }, 
  )
}
