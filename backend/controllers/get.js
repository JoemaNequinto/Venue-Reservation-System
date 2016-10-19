'use strict';
const db = require(__dirname + '/../lib/mysql');

exports.get_all = (req, res, next) => {
	const query = "SELECT *"
		+ " FROM person";
	db.query(query, (err, result) => {
		res.send(result);
	});
};