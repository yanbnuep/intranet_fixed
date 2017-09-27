const mssql = require('mssql');

const config = {
    user: 'ian',
    password: 'airmacau',
    server: '192.168.110.70',
    database: 'INTRANET',
    paresJSON: true
};
	
const connection = new mssql.ConnectionPool(config,function (err) {
    if(err)throw err;
});

module.exports = connection;