'use strict';

const importer = require('anytv-node-importer');

module.exports = (router) => {
	
	const __ = importer.dirloadSync(__dirname + '/../controllers/');
	
	router.post('/api/signup', __.account.signup);
	router.post('/api/login', __.account.login);
	router.get('/api/logout', __.account.logout);
	router.put('/api/updateProfile/:accountid', __.account.updateProfile);
	router.get('/api/checkSession', __.account.checkSession);
	router.get('/api/get-people', __.account.getAllPerson);
	router.get('/api/get-pending-account', __.account.getPendingAccount);
	router.put('/api/pending-account/:accountid', __.account.updatePendingAccount);
	router.delete('/api/pending-account/:accountid', __.account.deleteAccount);

	router.get('/api/get-events', __.event.getAll);
	router.post('/api/addEvent', __.event.addEvent);
	router.get('/api/get-pending-event', __.event.getPendingEvent);
	router.put('/api/pending-event/:eventid', __.event.updatePendingEvent);
	router.delete('/api/event/:eventid', __.event.deleteEvent);
	router.put('/api/event/:eventid', __.event.editEvent);

	router.get('/api/get-venues', __.venue.getAll);
	router.post('/api/addVenue', __.venue.addVenue);
	router.put('/api/venue/:venueid', __.venue.editVenue);
	router.delete('/api/venue/:venueid', __.venue.deleteVenue);

	router.get('/api/getPendingRequestOfUser/:userid', __.request.getReservation);
	router.all('*', (req, res) => {
		res.status(404).send({message : 'Unmatched route. =(('});
	});

	return router;
};