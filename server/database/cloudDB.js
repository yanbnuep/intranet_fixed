const nodeMaria = require('mariasql');
const squel = require('squel');

const setting = {
	host: '47.91.247.12',
	port: '3306',
	user:'ian',
	password: 'ian6691',
	db: 'intranet'
};


module.exports = new nodeMaria(setting);
