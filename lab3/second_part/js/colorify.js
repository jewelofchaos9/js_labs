function makeAlternatingColorText(elementId, text) {
  let element = document.getElementById(elementId);
  let letters = text.split('')
  let inserting = '';
  console.log(letters)

  for(i = 0; i < letters.length; i++) {
    inserting = document.createElement('span')
    let color =  i % 2 == 0 ? 'blue' : 'green'
    inserting.style.color = color
    inserting.style.display = "inline"

    inserting.innerText = letters[i]

    element.appendChild(inserting);
  }
}
