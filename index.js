var Proj = require('proj4js')
require('proj4js-defs')(Proj)

module.exports = function (src, dst, point, cb) {
  var pending = 2
  var srcp, dstp
  new(Proj.Proj)('EPSG:24821', function (p) {
    srcp = p
    if (--pending === 0) ready()
  })
  new(Proj.Proj)('EPSG:4326', function (p) {
    dstp = p
    if (--pending === 0) ready()
  })
  function ready () {
    var result = Proj.transform(srcp, dstp, { x: point[0], y: point[1] })
    cb(null, [result.x,result.y,result.z])
  }
}
