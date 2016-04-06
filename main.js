var proj = require('./')
var form = document.querySelector('form')

form.addEventListener('submit', function (ev) {
  ev.preventDefault()
  var point = [
    Number(form.elements['src-x'].value), // easting
    Number(form.elements['src-y'].value) // northing
  ]
  var srcCode = form.elements['src-code'].value
  var dstCode = form.elements['dst-code'].value
  proj(srcCode, dstCode, point, function (err, result) {
    form.elements['dst-x'].value = result[0]
    form.elements['dst-y'].value = result[1]
  })
})

document.querySelector('#flip').addEventListener('click', function (ev) {
  ev.preventDefault()
  swap(form.elements['src-code'], form.elements['dst-code'])
  swap(form.elements['src-x'], form.elements['dst-x'])
  swap(form.elements['src-y'], form.elements['dst-y'])
})

function swap (a, b) {
  var c = a.value
  a.value = b.value
  b.value = c
}
