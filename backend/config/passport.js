'use strict';

const LocalStrategy = require('passport-local').Strategy;

module.exports = (passport) => {
	passport.serializeUser( function (user, done) {
		done(null, user);
	});
	passport.deserializeUser( function (user, done) {
		done(null, user);
	});
	passport.use( new LocalStrategy (
		function (username, password, done) {
		User.findOne({username : username}, function(err, user){
			if (err) { return done(err); }
			if (!user) { return done(null, false, utility.responseHandler("No user found!")); }
			if (!user.validPassword(password)) { return done(null, false, utility.responseHandler("Invalid password!")); }
			if (!user.verifyPassword(password)) { return done(null, false); }
			return done(null, user);
		});
	}
	));
};