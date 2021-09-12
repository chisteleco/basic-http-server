
let express = require('express');
let app = express();


//API REST METHODS
app.get('/', function(req, res) {
  res.send('Hola Mundo!');
});


//loading routes

//loading casa routes
var casaRoutes = require('./routes/casa');
app.use('/casa', casaRoutes);
//end routes section


//LAUNCH LISTENING
app.listen(3000, function() {
  console.log('Aplicación ejemplo, escuchando el puerto 3000!');
});
