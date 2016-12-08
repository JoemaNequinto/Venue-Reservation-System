'use strict';
const db            = require(__dirname + '/../lib/mysql');

exports.getReservation = (req, res, next) => {
	const query = "SELECT *"
        + " FROM user_manages_event u NATURAL JOIN event e WHERE u.UserId = ? AND e.Status = 1";
    console.log(req.params.userid);
    db.query(query, [req.params.userid],(err, result) => {
    	if (err) {
			return res.status(500).send({code: err.code});
		}
    	// console.log(result);
        res.send(result);
    });
}
