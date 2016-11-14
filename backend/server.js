'use strict';

const config		= require(__dirname + '/config/config');
const router		= require(__dirname + '/config/router');
const express 		= require('express');
const session       = require('express-session');
const winston		= require('winston');

let app;
let handler;

function start() {
	if (handler) {
		handler.close();
	}

	// create express app
	app = express();

	// set config
	config.use(process.env.NODE_ENV);

	// notify that the application is starting
	winston.log('info', 'Starting', config.APP_NAME, 'on', config.ENV, 'environment');

	// Serves the static content in the frontend folder
	app.use(express.static(config.DIR.ASSETS));
	// lets you use HTTP verbs such as PUT and DELETE in places where the client doesn't support it
	app.use(require('method-override')());
	// parse application/x-www-form-urlencoded
	app.use(require('body-parser').urlencoded({extended: false}));
	// parse application/json
	app.use(require('body-parser').json());
	app.use(require('compression')());
	// configure the session store
	app.use(session({
		resave : false,
		secret : config.COOKIE_SECRET,
		rolling : true,
		saveUninitialized : false,
		name : config.COOKIE_NAME,
		cookie : {
			path: '/',
			httpOnly:false,
			secure:false,
			maxAge: 60 * 1000 * 60 * 2 // 2 hours
		}
	}));

	winston.log('info', 'Server listening on port', config.PORT);
	app.use(router(express.Router()));
	return app.listen(config.PORT);
}

handler = start();
