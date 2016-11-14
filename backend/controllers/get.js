'use strict';
const db = require(__dirname + '/../lib/mysql');

exports.getAllPerson = (req, res, next) => {
	const query = "SELECT *"
		+ " FROM person";
	db.query(query, (err, result) => {
		res.send(result);
	});
};