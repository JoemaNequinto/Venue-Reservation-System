'use strict';
const db            = require(__dirname + '/../lib/mysql');
const winston       = require('winston');


exports.login = (req, res, next) => {

    const data = {
        username:   req.body.username,
        password:   req.body.password
    };

    function start () {
        let response;

        // If a session is already existing
        if (req.session && req.session.user) {
            response = status.ALREADY_LOGGED_IN;

            return res.status(response.status).send(response.message);
        }
        
        const queryString = "SELECT *"
			+ " FROM person"
			+ " WHERE username = ?"
			+ " AND password = ?";

		db.query(queryString,
                [data.password, data.username])
            .then((result) => {

                // If the username is not found
                if (!result.length) {
                    response = status.INV_USERNAME;

                    return res.status(response.status).send(response.message);
                }

                // If the password is invalid
                if (!result[0].is_password_valid) {
                    response = status.INV_PASSWORD;

                    return res.status(response.status).send(response.message);
                }

                return result;
            })
            .then((result) => {

                let user = {
                    username:               result[0].username,
                    is_password_valid:      result[0].is_password_valid,
                }

                req.session.user = user;
                res.send(user);
            })
            .catch((error) => {
                winston.error(error);
            });
    };

    start();
};


exports.logout = (req, res, next) => {
    let response;

    function start () {

        // If there is no active session
        if (!req.session.user) {
            response = status.MISSING_SESSION;

            return res.status(response.status).send(response.message);
        }

        req.session.destroy();
        res.send({message: 'Successfully logged out'});
    }

    start();
};
