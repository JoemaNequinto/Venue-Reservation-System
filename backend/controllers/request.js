'use strict';
const db            = require(__dirname + '/../lib/mysql');

exports.getPendingRequestOfUser = (req, res, next) => {
    const userid = req.body;
    console.log(userid);
    const query = "SELECT *"
        + " FROM user_manages_event u natural join event e where u.Userid = " + userid + " and status = 0";
    db.query(query, (err, result) => {
        res.send(result);
    });
};
