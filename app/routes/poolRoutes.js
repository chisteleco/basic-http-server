var express = require('express');
var router = express.Router();

// define the pool page route
router.get('/', function (req, res) {
    res.send('Pool home page');
});
// define the about route
router.get('/about', function (req, res) {

    //json with pool info
    res.send('About Pool');
});

router.get('/info', function (req, res) {

    //json with pool info
    res.send('Info Pool');
});

module.exports = router;
