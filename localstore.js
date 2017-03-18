var time = document.getElementById('time')
var storageTheme = window.localStorage.getItem('theme') || 'day-mode'
function change () {
  if (time.className === 'day-mode') {
    time.setAttribute('class', 'night-mode')
    storageTheme = 'night-mode'
    window.localStorage.setItem('theme', storageTheme)
  } else if (time.className === 'night-mode' || time.className === null) {
    time.setAttribute('class', 'day-mode')
    storageTheme = 'day-mode'
    window.localStorage.setItem('theme', storageTheme)
  } else {
  }
}

window.onload = function () {
  document.getElementById('button').addEventListener('click', change)
  time.setAttribute('class', storageTheme)
}

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

/*
time.setAttribute('class', 'night-mode')
storageTheme = 'night-mode'
window.localStorage.setItem('theme', storageTheme)
*/
