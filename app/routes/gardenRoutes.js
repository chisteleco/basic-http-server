var express = require('express');
var router = express.Router();

// define the garden home page route
router.get('/', function (req, res) {
    res.send('Garden home page');
});
// define the about route
router.get('/about', function (req, res) {

    //json with garden info
    res.send('About Garden');
});

router.get('/info', function (req, res) {

    //json with garden info
    res.send('Info Garden');
});

module.exports = router;
