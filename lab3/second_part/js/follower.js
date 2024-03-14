document.addEventListener('mousemove', (event) => {
  y = event.pageY
  x = event.pageX

  console.log(x)

  circle = document.getElementById("following_circle")
  circle.style.left = x + 'px'
  circle.style.top = y + 'px'
})
