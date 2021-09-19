
let express = require('express');
let app = express();
let dbMgr= require('./FireBaseMgr/databaseConnector/dbFunctions.js');
let firebase= require('./FirebaseMgr/config.js');
//API REST METHODS
app.get('/', function(req, res) {
  res.send('Hola Mundo!');
});


//loading routes

//loading home routes
//var homeRoutes = require('./routes/homeRoutes');
//app.use('/home', homeRoutes);

firebase.initdb();

createRoutes(app);

dbMgr.initDB();

//LAUNCH LISTENING
app.listen(3000, function() {
  console.log('Aplicación ejemplo, escuchando el puerto 3000!');
});



function createRoutes(app) {

    var createRoute=require('./routes/routesManager');
    let mapRoutes = createRoute();
	
	//loading home routes
    //var homeRoutes = require('./routes/gardenRoutes');
    app.use('/home', mapRoutes["home"]);
	
    //loading garden routes
    //var gardenRoutes = require('./routes/gardenRoutes');
    app.use('/garden', mapRoutes["garden"]);

    //loading pool routes
    //var poolRoutes = require('./routes/poolRoutes');
    app.use('/pool', mapRoutes["pool"]);

    //loading security routes
    //var securityRoutes = require('./routes/securityRoutes');
    app.use('/security', mapRoutes["security"]);
//end routes section

}