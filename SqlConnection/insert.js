var Connection = require('tedious').Connection,
  Request = require('tedious').Request,
  TYPES = require('tedious').TYPES,
  Buffer = require('buffer').Buffer,
  Config = require('./configuration');

var insert = function (albumName, user, file) {
  console.log('3');
  var connection = new Connection(Config);
  connection.on('connect', function (err) {
    if (!err) {
      var request = new Request(`INSERT INTO FileStorage (Source, Data, UploadedBy)
                                  VALUES (@source, @data, @uploadedBy)`,
        function (err) { err && console.log('err', err); });
      const buffer = Buffer.from(JSON.stringify(file));
      console.log('buffer', buffer);
      request.addParameter('source', TYPES.NVarChar, albumName);
      request.addParameter('data', TYPES.Image, buffer);
      request.addParameter('uploadedBy', TYPES.NVarChar, user);
      connection.execSql(request);
    }
  });
}

module.exports = insert;