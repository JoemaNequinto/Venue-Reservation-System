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
		VenueId : req.body.VenueId
	}

	const query = "INSERT INTO event(EventName, EventDetails, EventDate, EventStartTime, EventEndTime, Status, VenueId) VALUES (?, ?, ?, ?, ?, ?, ?)";
	const request = [data.EventName, data.EventDetails, data.EventDate, data.EventStartTime, data.EventEndTime, data.Status, data.VenueId];
	db.query(query, request, function(err, rows) {
		if (err) {
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
		VenueId : req.body.VenueId
	}

	var query = "INSERT INTO event(EventName, EventDetails, EventDate, EventStartTime, EventEndTime, Status, VenueId) VALUES (?, ?, ?, ?, ?, ?, ?)";
	const request = [data.EventName, data.EventDetails, data.EventDate, data.EventStartTime, data.EventEndTime, data.Status, data.VenueId];
	db.query(query, request, function(err, rows) {
		if (err) {
			return res.status(500).send({code: err.code});
		}
		// res.send(rows);
	});

	var query = "INSERT INTO user_manages_event(UserId, EventId, DateRequested)"
				+ " VALUES((SELECT u.UserId FROM user u NATURAL JOIN person p where p.PersonId = ?), (SELECT max(EventId) FROM event), NOW())";
	db.query(query, req.params.userid, function(err, rows) {
		if (err) {
			return res.status(500).send({code: err.code});
		}
		res.send(rows);
	});

};


exports.getAll = (req, res, next) => {
	const query = "SELECT * "
		+ " FROM event e, venue v WHERE v.VenueId = e.VenueId "
		+ " AND e.Status = 1";
	db.query(query, (err, result) => {
		// console.log(result);
		res.send(result);
	});
};

exports.getUserEvent = (req, res, next) => {
	const query = "SELECT * "
		+ " FROM user_manages_event m, user u, person p, event e, venue v "
		+ " WHERE m.UserId = u.UserId "
		+ " AND u.PersonId = p.PersonId "
		+ " AND p.PersonId = ? "
		+ " AND m.EventId = e.EventId "
		+ " AND v.VenueId = e.VenueId "
		+ " AND e.Status = 1"
		+ " ORDER BY e.EventDate DESC";
	db.query(query, [req.params.userid], function(err, result) {
		// console.log(result);
		res.send(result);
	});
};

exports.getPendingEvent = (req, res, next) => {
	const query = "SELECT *"
		+ " FROM event e INNER JOIN venue v"
		+ " ON e.VenueId = v.VenueId"
		+ " WHERE e.Status = 0";
	db.query(query, (err, result) => {
		res.send(result);
	});
};

exports.getPendingCancellations = (req, res, next) => {
	console.log(req.session);
	const query = "SELECT *"
		+ " FROM event e INNER JOIN venue v"
		+ " ON e.VenueId = v.VenueId"
		+ " WHERE e.Status = 2";
	db.query(query, (err, result) => {
		console.log(result);
		res.send(result);
	});
};


exports.updatePendingEvent = (req, res, next) => {
	var query = "UPDATE event"
		+ " SET Status = 1"
		+ " WHERE EventId = ?";
	db.query(query, [req.params.eventid], (err, result) => {
		if (err) {
			return res.status(500).send({code: err.code});
		}
		// res.send(result);
	});

	query = "UPDATE user_manages_event"
		+ " SET DateEvaluated = NOW()"
		+ " WHERE EventId = ?";
	db.query(query, [req.params.eventid], (err, result) => {
		if (err) {
			return res.status(500).send({code: err.code});
		}
		res.send(result);
	});

};

exports.editEvent = (req, res, next) => {
	const data = [
		req.query.EventName,
		req.query.EventDetails,
		req.query.EventDate,
		req.query.EventStartTime,
		req.query.EventEndTime,
		req.params.eventid
	];
	const query = "UPDATE event"
		+ " SET EventName = ?, EventDetails = ?, EventDate = ?, EventStartTime = ?, EventEndTime = ? "
		+ " WHERE EventId = ?";
	db.query(query, data, (err, result) => {
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
