'use strict';

const get = require(__dirname + '/../controllers/get');

module.exports = (router) => {

	router.get('/get', get.get_all);

	router.all('*', (req, res) => {
		res.status(404).send({message : 'Unmatched route. =(('});
	});

	return router;
};