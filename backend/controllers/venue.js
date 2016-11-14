'use strict';
const db = require(__dirname + '/../lib/mysql');

exports.addVenue = (req, res, next) => {
	const data = {
		LocationName : req.body.LocationName,
		Capacity : req.body.Capacity,
		LocationDetails : req.body.LocationDetails
	}
	const query = "INSERT INTO location(LocationName, Capacity, LocationDetails) VALUES (?, ?, ?)";
	const request = [data.LocationName, data.Capacity, data.LocationDetails];
	db.query(query, request, function(err, rows) {
		if (err) {
			return res.send(500, {code: err.code});
		}
		res.send(rows);
	});
};