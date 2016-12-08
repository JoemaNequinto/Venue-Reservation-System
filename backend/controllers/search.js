'use strict';
const db            = require(__dirname + '/../lib/mysql');

exports.searchMap = (req, res, next) => {
	const query = "SELECT * FROM venue WHERE Name LIKE '%"+ req.params.text +"%'";
    db.query(query, (err, result) => {
    	if (err) {
			return res.status(500).send({code: err.code});
		}
        res.send(result);
    });
}
