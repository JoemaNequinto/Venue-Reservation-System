'use strict';
const db = require(__dirname + '/../lib/mysql');

exports.cancelRequest = (req, res, next) => {
	const query = "UPDATE event SET Status = 2 WHERE EventId = ?";
	db.query(query, [req.params.eventid], function(err, result) {
		if (err) {
			return res.status(500).send({code: err.code});
		}
		res.send(result);
	});
};

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
			console.log("error");
			return res.status(500).send({code: err.code});
		}
		res.send(rows);
	});
};

exports.reserveEvent = (req, res, next) => {
	const data = {
		EventName : req.body.EventName,
		EventDetails : req.body.EventDetails,
		EventDate : req.body.EventDate,
		EventStartTime : req.body.EventStartTime,
		EventEndTime : req.body.EventEndTime,
		Status : 0,
		VenueId : 1
	}

	var query = "INSERT INTO event(EventName, EventDetails, EventDate, EventStartTime, EventEndTime, Status, VenueId) VALUES (?, ?, ?, ?, ?, ?, ?)";
	const request = [data.EventName, data.EventDetails, data.EventDate, data.EventStartTime, data.EventEndTime, data.Status, data.VenueId];
	db.query(query, request, function(err, rows) {
		if (err) {
			console.log("insert error");
			return res.status(500).send({code: err.code});
		}
		// res.send(rows);
	});

	var query = "INSERT INTO user_manages_event(UserId, EventId, DateRequested)"
				+ " VALUES((SELECT u.UserId FROM user u NATURAL JOIN person p where p.PersonId = ?), (SELECT max(EventId) FROM event), NOW())";
	db.query(query, req.params.userid, function(err, rows) {
		if (err) {
			console.log("foreign error");
			return res.status(500).send({code: err.code});
		}
		res.send(rows);
	});

};


exports.linkEventToUser = (req, res, next) => {
	const userid = req.params.userid;
	const query = "INSERT INTO user_manages_event(UserId, EventId, DateRequested) VALUES("+userid+", (SELECT max(EventId) from event), NOW())";
	db.query(query, (err, result) => {
		if (err) {
			console.log("error in linkEventToUser")
			return res.status(500).send({code: err.code});
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
