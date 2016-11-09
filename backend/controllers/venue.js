'use strict';
const db = require(__dirname + '/../lib/mysql');

exports.addVenue = (req, res, next) => {
	const query = "INSERT INTO location(LocationName, Capacity, LocationDetails) VALUES (?, ?, ?)";
	db.query(query, [req.body.LocationName, req.body.Capacity, req.body.LocationDetails], function(err, rows) {
		if (err) {
			return res.send(500, {code: err.code});
		}
		res.send(rows);
	});
};