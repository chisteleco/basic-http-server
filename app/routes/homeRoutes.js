var express = require('express');
var router = express.Router();

let dbHome = require('../FireBaseMgr/databaseConnector/dbHome.js');
let auth= require('../FireBaseMgr/authentication/authMgr.js');
// define the home page route
router.get('/', function(req, res) {
	//auth.signIn(auth,'testnode@gmail.com','testnode');
	//console.log(auth.currentUser);
  res.send('Casa home page');
});
// define the about route
router.get('/about', function (req, res) {

    //json with home info
  res.send('About Casa');
});

router.get('/info', async function (req, res) {

    //json with home info
	let data= await dbHome.getHomeData()
    res.json(data);
});

module.exports = router;
