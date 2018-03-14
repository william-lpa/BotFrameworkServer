var Insert = require('./insert'),
    Select = require('./select');

var sqlConnection = {
    insert: Insert,
    select: Select,
};

module.exports = sqlConnection;