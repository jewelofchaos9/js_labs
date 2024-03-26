document.addEventListener('mousemove', (event) => {
  y = event.pageY
  x = event.pageX

  circle = document.getElementById("following_circle")
  circle.style.left = (x - 30) + 'px'
  circle.style.top = (y - 30) + 'px'
})
