
let express = require('express');
let app = express();
let dbMgr= require('./FireBaseMgr/databaseConnector/dbFunctions.js');
//Winston logger section 
var winston = require('./config/winston');

const path= require('path')

//serve client app

app.use(express.static(path.join(__dirname,'client','build')))
app.use(express.static(path.join(__dirname, 'client')))


const webPort=3000;

//logger configuration. Using morgan with winston
let morgan=require('morgan')
app.use(morgan('tiny', { stream: winston.stream }));


//API REST METHODS
app.get('/', function (req, res) {
    winston.info('Received data');
    winston.debug('Mensaje de prueba debug')
    res.sendFile(path.join(__dirname,'client','public','index.html'))
});


//initialize database manager
dbMgr.initDB();

//create routes
createRoutes(app);



//LAUNCH LISTENING
app.listen(process.env.PORT || webPort, function() {
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

    app.use('/dec', mapRoutes["dec"])
//end routes section

}