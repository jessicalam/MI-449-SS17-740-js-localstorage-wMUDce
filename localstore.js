var time = document.getElementById('time')
var storage = window.localStorage.getItem('storage')
function change () {
  if (time.className === 'day-mode') {
    time.setAttribute('class', 'night-mode')
    storage = 'night-mode'
    window.localStorage.setItem('storage', storage)
  } else {
    time.setAttribute('class', 'day-mode')
    storage = 'day-mode'
    window.localStorage.setItem('storage', storage)
  }
}

window.onload = function () {
  document.getElementById('button').addEventListener('click', change)
  time.setAttribute('class', storage)
}

window.localStorage.setItem('storage', storage)

if (window.localStorage.getItem('storage') === undefined) {
  storage = 'day-mode'
  window.localStorage.setItem('storage', storage)
}

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
