function appendErrorMessage() { 
  const div = document.getElementById("images_async")
  const p = document.createElement("p")
  const errorText = document.createTextNode("Can't load image")
  p.appendChild(errorText)
  
  div.appendChild(p)
} 

async function loadImageSync(imageHref) {
  let img = new Image()
  img.src = imageHref
  img.onerror = () => return new Error("Cannot load image")

  return img
}

function appendImage(image) {
  const div = document.getElementById("images_async")
  div.appendChild(image)
}

function buttonImage() {
  for(i = 0; i < 5; i++) {
    imgHref = prompt()
    loadImageSync(imgHref).then(
      function(result) { appendImage(result) },
      function(error) { appendErrorMessage()}
    )
  }
}

function buttonImageWithoutWait() {
  promises = []
  picturesCount = 5
  for(i = 0; i < picturesCount; i++) {
    imgHref = prompt()
    promises.push(loadImageSync(imgHref))
  }

  promises.forEach((promise) => promise.then(
      function(result) { appendImage(result) },
      function(error) { appendErrorMessage()}
  ))
  
}
