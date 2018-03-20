var express = require('express');
var sql = require('./../../SqlConnection');
var router = express.Router();

router.get('/', function (req, resp, next) {

  var callback = function selectCallback(query) {
    var files = [];
    query.forEach(file => {

      var retrievedfile = {
        albumName: file[1].value,
        data: file[2].value,
        createdOn: file[3].value,
        createdBy: file[4].value,
      }
      files.push(retrievedfile);
    });
    return resp.status(200).json({ files: files });
  };
console.log('req',req.query.albumName);
  var retorno = sql.select(req.query.albumNames, callback);

});

router.post('/', function (req, resp, next) {
  const { body } = req;
  sql.insert(body.albumName, body.user, body.file);
  return resp.status(200).json({ ok: 'ok' });
});

module.exports = router;