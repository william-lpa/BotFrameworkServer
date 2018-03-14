var express = require('express');
var sql = require('./../../SqlConnection');
var router = express.Router();

router.get('/', function (req, resp, next) {
  var retorno = sql.select(req.query.albumNames);
  return resp.status(200).json({ ok: 'ok ' + retorno });
});

router.post('/', function (req, resp, next) {
  sql.insert('teste', 'William', req.body);
  return resp.status(200).json({ ok: 'ok' });
});

module.exports = router;