var Config = require('./configuration'),
  Connection = require('tedious').Connection,
  Request = require('tedious').Request,
  connection = new Connection(Config);


var select =
  function queryDatabase(albumNames, callbackSelect) {
    console.log('Reading rows from the Table...', `SELECT * from FileStorage where FileStorage.Source in ('${[albumNames].join()}')`);
    var array = [albumNames];

    var request = new Request(
      `SELECT top 3 * from FileStorage where FileStorage.Source in ('${array.join()}')`
      , (error, rowCount, rows) => callbackSelect(rows));

    connection.execSql(request);
  }

module.exports = select;