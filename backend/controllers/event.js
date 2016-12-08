'use strict';
const db = require(__dirname + '/../lib/mysql');

exports.addEvent = (req, res, next) => {
	const data = {
		EventName : req.body.EventName,
		EventDetails : req.body.EventDetails,
		EventDate : req.body.EventDate,
		EventStartTime : req.body.EventStartTime,
		EventEndTime : req.body.EventEndTime,
		Status : 0,
		VenueId : 1
	}
	const query = "INSERT INTO event(EventName, EventDetails, EventDate, EventStartTime, EventEndTime, Status, VenueId) VALUES (?, ?, ?, ?, ?, ?, ?)";
	const request = [data.EventName, data.EventDetails, data.EventDate, data.EventStartTime, data.EventEndTime, data.Status, data.VenueId];
	db.query(query, request, function(err, rows) {
		if (err) {
			return res.send(500, {code: err.code});
		}
		res.send(rows);
	});
};

exports.getAll = (req, res, next) => {
	const query = "SELECT *"
		+ " FROM event"
		+ " WHERE Status != 0";
	db.query(query, (err, result) => {
		res.send(result);
	});
};

exports.getPendingEvent = (req, res, next) => {
	const query = "SELECT *"
		+ " FROM event"
		+ " WHERE Status = 0";
	db.query(query, (err, result) => {
		res.send(result);
	});
};

exports.updatePendingEvent = (req, res, next) => {
	const query = "UPDATE event"
		+ " SET Status = 1"
		+ " WHERE EventId = ?";
	db.query(query, [req.params.eventid], (err, result) => {
		if (err) {
			return res.status(500).send({code: err.code});
		}
		res.send(result);
	});
};

exports.editEvent = (req, res, next) => {
	const query = "UPDATE event"
		+ " SET ?"
		+ " WHERE EventId = ?";
	db.query(query, [req.body, req.params.eventid], (err, result) => {
		if (err) {
			return res.status(500).send({code: err.code});
		}
		res.send(result);
	});
};

exports.deleteEvent = (req, res, next) => {
	const query = "DELETE FROM event"
		+ " WHERE EventId = ?";
	db.query(query, [req.params.eventid], (err, result) => {
		if (err) {
			return res.status(500).send({code: err.code});
		}
		res.send(result);
	});
};