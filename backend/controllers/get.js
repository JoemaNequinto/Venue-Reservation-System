'use strict';
const db = require(__dirname + '/../lib/mysql');

exports.getAllPerson = (req, res, next) => {
	const query = "SELECT *"
		+ " FROM person";
	db.query(query, (err, result) => {
		res.send(result);
	});
};

exports.getAllLocation = (req, res, next) => {
	const query = "SELECT *"
		+ " FROM location";
	db.query(query, (err, result) => {
		res.send(result);
	});
};

exports.getAllEvent = (req, res, next) => {
	const query = "SELECT *"
		+ " FROM event";
	db.query(query, (err, result) => {
		res.send(result);
	});
};