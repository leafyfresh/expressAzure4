var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res) {
    res.render('chat', {
        title: 'Express' , scripts: ['/javascripts/mongooseConnectTest.js', 'https://cdn.socket.io/socket.io-1.3.5.js', 'http://code.jquery.com/jquery-1.11.1.js', '/javascripts/clientSocketListen.js']
    });
});

module.exports = router;