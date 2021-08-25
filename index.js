

let express = require('express');
let app = express();


//API REST METHODS
app.get('/', function(req, res) {
  res.send('Hola Mundo!');
});


//LAUNCH LISTENING
app.listen(3000, function() {
  console.log('Aplicación ejemplo, escuchando el puerto 3000!');
});
