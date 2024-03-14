document.addEventListener('DOMContentLoaded', event => {
    document.getElementById('task1').addEventListener('selectstart', (event) =>{
      event.preventDefault()
    });

    document.getElementById('task1').addEventListener('copy', (event) => {
      event.preventDefault()
    });

    document.getElementById('task1').addEventListener('contextmenu', (event) => {
      event.preventDefault()
    });
})
