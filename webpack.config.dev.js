const conf = require('./webpack.config')

conf.watch = true
conf.devtool = 'source-map'

module.exports = conf
