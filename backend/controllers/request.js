'use strict';
const db            = require(__dirname + '/../lib/mysql');

exports.getReservation = (req, res, next) => {
	const query = "SELECT * FROM "
		+ " user_manages_event m "
		+ " INNER JOIN user u ON m.UserId = u.UserId INNER JOIN event e ON m.EventId = e.EventId "
		+ " WHERE u.PersonId = ? AND e.Status = 0";

    db.query(query, [req.params.userid],(err, result) => {
    	if (err) {
			return res.status(500).send({code: err.code});
		}
        res.send(result);
    });
}
