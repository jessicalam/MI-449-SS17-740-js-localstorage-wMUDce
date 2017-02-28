var time = document.getElementById('time')
var storageTheme = window.localStorage.getItem('storage')
function change () {
  if (time.className === 'day-mode') {
    time.setAttribute('class', 'night-mode')
    storageTheme = 'night-mode'
    window.localStorage.setItem('theme', storageTheme)
  } else if (time.className === 'night-mode' || null) {
    time.setAttribute('class', 'day-mode')
    storageTheme = 'day-mode'
    window.localStorage.setItem('theme', storageTheme)
  } else {
    time.setAttribute('class', 'night-mode')
    storageTheme = 'night-mode'
    window.localStorage.setItem('theme', storageTheme)
  }
}
console.log('start')
window.onload = function () {
  console.log('onload')
  document.getElementById('button').addEventListener('click', change)
  time.setAttribute('class', storageTheme)
}
console.log('afterSet')

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
