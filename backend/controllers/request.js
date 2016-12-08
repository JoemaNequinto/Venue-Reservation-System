'use strict';
const db            = require(__dirname + '/../lib/mysql');

exports.getReservation = (req, res, next) => {
	const query = "SELECT *"
		+ " FROM user_manages_event NATURAL JOIN user NATURAL JOIN person p NATURAL JOIN event "
        + " WHERE Status = 1 AND p.PersonId = ?";
    console.log("backedn" + req.params.userid);
    db.query(query, [req.params.userid],(err, result) => {
    	if (err) {
			return res.status(500).send({code: err.code});
		}
    	console.log(result);
        res.send(result);
    });
}
