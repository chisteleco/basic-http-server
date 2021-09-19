var express = require('express');
var router = express.Router();

// define the security page route
router.get('/', function (req, res) {
    res.send('Security home page');
});
// define the about route
router.get('/about', function (req, res) {

    //json with securityinfo
    res.send('About Security');
});

router.get('/info', function (req, res) {

    //json with securityinfo
    res.send('Info Security');
});

module.exports = router;
