'use strict';

exports.get_all = (req, res, next) => {
	db.query('SELECT * FROM person', [], (err, result) => {
		res.send(result);
	});
};