var proj = require('../')

var point = [219827,310515] // Easting, Northing
proj('EPSG:'+24821, 'EPSG:'+4326, point, function (err, result) {
  console.log(result)
})
