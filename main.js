var proj = require('./')
var form = document.querySelector('form')

form.addEventListener('submit', function (ev) {
  ev.preventDefault()
  var srcpt = [
    form.elements['src-x'].value,
    form.elements['src-y'].value
  ]
  var srcCode = form.elements['src-code'].value
  var dstCode = form.elements['src-code'].value
  var point = srcpt // Easting, Northing
  proj(srcCode, dstCode, point, function (err, result) {
    form.elements['dst-x'].value = result.x
    form.elements['dst-y'].value = result.y
  })
})
