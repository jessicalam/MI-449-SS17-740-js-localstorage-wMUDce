var time = document.getElementById('time')
var storageTheme = window.localStorage.getItem('storage')
function change () {
  if (time.className === 'day-mode') {
    time.setAttribute('class', 'night-mode')
    storageTheme = 'night-mode'
    window.localStorage.setItem('theme', storageTheme)
  } else if (time.className === 'night-mode') {
    time.setAttribute('class', 'day-mode')
    storageTheme = 'day-mode'
    window.localStorage.setItem('theme', storageTheme)
  } else { // this happens when the storage is null
    time.setAttribute('class', 'night-mode')
    storageTheme = 'night-mode'
    window.localStorage.setItem('theme', storageTheme)
  }
}
console.log('start') // this tells me it goes through this function 1st
window.onload = function () {
  console.log('onload') // goes to this 3rd, reason is because it goes through all of the js before going to the onload, it goes to the change function when it is the button is clicked
  document.getElementById('button').addEventListener('click', change)
  time.setAttribute('class', storageTheme)
}
console.log('afterSet') // goes to this 2nd

window.localStorage.setItem('theme', storageTheme)

//  FOR THE COUNTER ELEMENT
var counter = window.localStorage.getItem('counter')
if (counter === null) {
  counter = 1
} else {
  counter = parseInt(counter) + 1
}
window.localStorage.setItem('counter', counter)

var counterElement = document.getElementById('counter')
counterElement.textContent = 'Counter : ' + counter
