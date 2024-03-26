function appendErrorMessage() { 
  const div = document.getElementById("images_async")
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

async function appendImage(image) {
  const div = document.getElementById("images_async")
  div.appendChild(image)
}

async function buttonImage() {
  for(i = 0; i < 5; i++) {
    imgHref = prompt()
    loadImageSync(imgHref).then(
      function(result) { appendImage(result) },
      function(error) { appendErrorMessage()}
    )
  }
}

async function buttonImageWithoutWait() {
  hrefs = []
  picturesCount = 5
  for(i = 0; i < picturesCount; i++) {
    imgHref = prompt()
    hrefs.push(imgHref)
  }

  hrefs.forEach(async (href) => 
    {
      try {
        let im = await loadImageSync(href)
        appendImage(im)
        console.log(im)
      } catch(e) {
        appendErrorMessage()
        console.log(e)
      }
    }
  )
}
