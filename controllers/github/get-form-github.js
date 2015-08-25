require('dotenv').load();

var proxy = require('../../helpers/proxy-content-type')

/**
 * A simple proxy for forms stored in Github, passes through Basic Auth and
 * adds appropriate content-type headers
 */
module.exports = function (req, res) {
  var options = {
    headers: {
      'User-Agent': 'simple-odk',
      'Accept': 'application/vnd.github.v3.raw'
    }
  }

  options.contentType = 'text/xml'

  var formUrl = 'https://api.github.com/repos/' + req.params.user + '/' +
    req.params.repo + '/git/blobs/' + req.params.blob_sha

  proxy(formUrl, res, options)
}
