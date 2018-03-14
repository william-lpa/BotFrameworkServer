var Config = require('./configuration'),
  Connection = require('tedious').Connection,
  Request = require('tedious').Request,
  connection = new Connection(Config);


var select =
  function queryDatabase(albumNames) {
    console.log('Reading rows from the Table...', `SELECT * from FileStorage where FileStorage.Source in ('${[albumNames].join()}')`);
    var array = [albumNames];

    var request = new Request(
      `SELECT * from FileStorage where FileStorage.Source in ('${array.join()}')`
    );

    request.on('row', function (columns) {
      columns.forEach(function (column) {
        console.log("%s\t%s", column.metadata.colName, column.value, JSON.stringify(column.value));
      });
    });
    connection.execSql(request);
  }

module.exports = select;