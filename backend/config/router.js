'use strict';

const __ = require(__dirname + '/../controllers/user');

module.exports = (router) => {

	router.del = router.delete;

	router.post('/api/login', __.login);
	router.get('/api/logout', __.logout);

	router.all('*', (req, res) => {
		res.status(404).send({message : 'Unmatched route. =(('});
	});

	return router;
};