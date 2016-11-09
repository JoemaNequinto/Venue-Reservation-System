'use strict';

const mysql = require('mysql');

const obj = {
	host: 'localhost',
	user: 'datababes',
	password: 'datababes',
	database: 'DATABABES'
};

module.exports = mysql.createConnection(obj);