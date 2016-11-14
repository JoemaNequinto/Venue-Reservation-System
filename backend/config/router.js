'use strict';

const importer = require('anytv-node-importer');

module.exports = (router) => {
	
	const __ = importer.dirloadSync(__dirname + '/../controllers/')
	
	router.post('/api/login', __.user.login);
	router.get('/api/logout', __.user.logout);
	router.get('/api/get-people', __.get.getAllPerson);
	router.get('/api/get-events', __.event.getAll);
	router.get('/api/get-venues', __.venue.getAll);
	router.post('/api/addVenue', __.venue.addVenue);
	router.post('/api/addEvent', __.event.addEvent);
	router.post('/api/signup', __.user.signup);

	router.all('*', (req, res) => {
		res.status(404).send({message : 'Unmatched route. =(('});
	});

	return router;
};