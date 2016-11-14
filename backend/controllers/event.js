'use strict';
const db = require(__dirname + '/../lib/mysql');

exports.addEvent = (req, res, next) => {
	const data = {
		EventName : req.body.EventName,
		EventDetails : req.body.EventDetails,
		EventDate : req.body.EventDate,
		EventStartTime : req.body.EventStartTime,
		EventEndTime : req.body.EventEndTime,
		VenueId : 1
	}
	const query = "INSERT INTO event(EventName, EventDetails, EventDate, EventStartTime, EventEndTime, VenueId) VALUES (?, ?, ?, ?, ?, ?)";
	const request = [data.EventName, data.EventDetails, data.EventDate, data.EventStartTime, data.EventEndTime, data.VenueId];
	db.query(query, request, function(err, rows) {
		if (err) {
			return res.send(500, {code: err.code});
		}
		res.send(rows);
	});
};

exports.getAll = (req, res, next) => {
	const query = "SELECT *"
		+ " FROM event";
	db.query(query, (err, result) => {
		res.send(result);
	});
};