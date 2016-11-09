'use strict';

const importer = require('anytv-node-importer');

module.exports = (router) => {
	
	const __ = importer.dirloadSync(__dirname + '/../controllers/')
	
	router.post('/login', __.user.login);
	router.get('/logout', __.user.logout);
	router.get('/get-people', __.get.getAllPerson);
	router.get('/get-events', __.get.getAllEvent);
	router.get('/get-locations', __.get.getAllLocation);
	router.post('/locations', __.venue.addVenue);

	router.all('*', (req, res) => {
		res.status(404).send({message : 'Unmatched route. =(('});
	});

	return router;
};