'use strict';
const db            = require(__dirname + '/../lib/mysql');

exports.login = function(req, res, next) {
	
	const data = {
        username: req.body.username,
        password: req.body.password
    };

    //what to do at the start of the query
    function start() {
        //Do not append the user inputs to string. This eliminates SQL Injection.
        const queryString = "SELECT *"
            + " FROM person"
            + " WHERE Username = ?"
            + " AND Password = ?"
            + " AND Status = 1";
        db.query(
            queryString,
            [data.username, data.password],
            send_response
        );
    };

    //what to do after the query is done
    function send_response(err, result, args, last_query) {
        if(err) {
            next(err);
            return res.status(500).send(err);
        } else if(!result.length) {
            //Do not send which one is wrong. This eliminates user enumeration.
            return res.status(404).send({message: 'Wrong username or password.'});
        } else {
            req.session.user = {
                username: result[0].username,
                role:"USER"
            };
            result[0].role = "USER";
            return res.send(result[0]);
        }
    };
    start();
};

exports.logout = function(req, res, next) {
    function start() {
        req.session.destroy();
        return res.send({message: 'Logout success!'});
    };
    start();
};

exports.checkSession = function (req, res, next) {
    function  start() {
        if (!req.session.username) {
            return res.send("NO_SESSION");
        } else {
            return res.send("SESSION");
        }
    };
    start();
};

exports.signup = (req, res, next) => {
    const data = {
        FirstName : req.body.FirstName,
        MiddleName : req.body.MiddleName,
        LastName : req.body.LastName,
        EmailAddress : req.body.EmailAddress,
        Username : req.body.Username,
        Password : req.body.Password,
        Status : 0
    }
    const query = "INSERT INTO person(FirstName, MiddleName, LastName, EmailAddress, Username, Password, Status) VALUES (?, ?, ?, ?, ?, ?, ?)";
    const request = [data.FirstName, data.MiddleName, data.LastName, data.EmailAddress, data.Username, data.Password, data.Status];
    db.query(query, request, function(err, rows) {
        if (err) {
            return res.send(500, {code: err.code});
        }
        res.send(rows);
    });
};