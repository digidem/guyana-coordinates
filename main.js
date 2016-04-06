var proj = require('./')
var form = document.querySelector('form')

form.addEventListener('submit', function (ev) {
  ev.preventDefault()
  var point = [
    Number(form.elements['src-x'].value), // easting
    Number(form.elements['src-y'].value) // northing
  ]
  var srcCode = form.elements['src-code'].value
  var dstCode = form.elements['src-code'].value
  proj(srcCode, dstCode, point, function (err, result) {
    form.elements['dst-x'].value = result.x
    form.elements['dst-y'].value = result.y
  })
})
