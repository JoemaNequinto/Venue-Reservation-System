'use strict';

const __ = require(__dirname + '/../controllers/');

module.exports = (router) => {

	router.del = router.delete;

	router.post('/api/login', __.user.login);
	router.get('/api/logout', __.user.logout);

	router.all('*', (req, res) => {
		res.status(404).send({message : 'Unmatched route. =(('});
	});

	return router;
};