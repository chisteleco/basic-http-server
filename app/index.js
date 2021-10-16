
let express = require('express');
let app = express();
let dbMgr= require('./FireBaseMgr/databaseConnector/dbFunctions.js');
//let firebase= require('./FirebaseMgr/config.js');

const webPort=3000;


//API REST METHODS
app.get('/', function(req, res) {
  res.send('Hola Mundo!');
});


//initialize database manager
dbMgr.initDB();

//create routes
createRoutes(app);



//LAUNCH LISTENING
app.listen(webPort, function() {
  console.log('Webserver launched, listening on port '+webPort+' !');
});



function createRoutes(app) {

    var createRoute=require('./routes/routesManager');
    let mapRoutes = createRoute();
	
	//loading home routes
    app.use('/home', mapRoutes["home"]);
	
    //loading garden routes
    app.use('/garden', mapRoutes["garden"]);

    //loading pool routes
    app.use('/pool', mapRoutes["pool"]);

    //loading security routes
    app.use('/security', mapRoutes["security"]);
//end routes section

}