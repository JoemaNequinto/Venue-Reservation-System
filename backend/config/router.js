'use strict';

const importer = require('anytv-node-importer');

module.exports = (router) => {
	
	const __ = importer.dirloadSync(__dirname + '/../controllers/')
	
	router.post('/login', __.user.login);
	router.get('/logout', __.user.logout);
	router.get('/get', __.get.get_all);

	router.all('*', (req, res) => {
		res.status(404).send({message : 'Unmatched route. =(('});
	});

	return router;
};