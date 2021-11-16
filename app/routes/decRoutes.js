var express = require('express');
var router = express.Router();

// define the garden home page route
router.get('/', function (req, res) {

    let _date = new Date();

    let date = _date.toDateString().slice(4);
    console.log(date);

    switch (date) {

        case 'Dec 3 2021':
            res.json({ 'msg': 'Cumplea\361os feliz!!!Cumplea\361os feliz!!!', 'img': '/Images/30.jpg', 'color': 'bisque', 'secret': 'Busca debajo de la cama', 'otherFile': '/OtherFiles/grabacion.aac' });
            break;
        case 'Dec 4 2021':
            res.json({ 'msg': 'Lo importante en la vida es aprender a tomar las riendas , elegir el camino, y disfrutar el paisaje', 'img': '/Images/caballos.jpg', 'color': 'bisque', 'secret': 'ponte ropa cómoda!', 'otherFile': '/OtherFiles/poni.mp3' });
            break;
        case 'Dec 5 2021':
            res.json({ 'msg': 'Hoy toca..... churros!!', 'img': '/Images/churros.jpg', 'color': 'DarkGoldenRod'});
            break;
        case 'Dec 6 2021':
            res.json({ 'msg': 'Hoy has ganado..... un masaje!!', 'img': '/Images/10.gif', 'color': 'DarkGoldenRod' });
            break;
        case 'Dec 7 2021':
            res.json({ 'img': '/Images/gelieg.png', 'color': 'black' });
            break;
        case 'Dec 8 2021':
            break;
        case 'Dec 9 2021':
            break;
        case 'Dec 10 2021':
            res.json({ 'msg': 'Hoy me toca a mi!! Pero qué feliz soy de poder celebrarlo a tu lado :) ', 'img': '/Images/9.jpg', 'color': 'DarkGoldenRod' });
            break;
        case 'Dec 11 2021':
            break;
        case 'Dec 12 2021':
            break;
        case 'Dec 13 2021':
            break;
        case 'Dec 14 2021':
            break;
        case 'Dec 15 2021':
            break;
        case 'Dec 16 2021':
            res.json({ 'msg': 'Hoy toca, vacaciones navideñas! viva!!', 'img': '/Images/alsacia.jpg', 'color': 'DarkGoldenRod' });
            break;
        case 'Dec 17 2021':
            break;
        case 'Dec 18 2021':
            break;
        case 'Dec 19 2021':
            break;
        case 'Dec 20 2021':
            break;
        case 'Dec 21 2021':
            break;
        case 'Dec 22 2021':
            break;
        case 'Dec 23 2021':
            break;
        case 'Dec 24 2021':
            break;
        case 'Dec 25 2021':
            break;
        case 'Dec 26 2021':
            break;
        case 'Dec 27 2021':
            break;
        case 'Dec 28 2021':
            break;
        case 'Dec 29 2021':
            break;
        case 'Dec 30 2021':
            break;
        case 'Dec 31 2021':
            break;
        default:
            //res.json({ 'msg': 'Cumplea\361os feliz!!!Cumplea\361os feliz!!!', 'img': '/Images/30.jpg', 'color': 'bisque', 'secret': 'Busca debajo de la cama', 'otherFile': '/OtherFiles/grabacion.aac' });
//            res.json({ 'msg': 'Hoy toca..... churros!!', 'img': '/Images/churros.jpg', 'color': 'DarkGoldenRod' });
            //res.json({ 'msg': 'Hoy me toca a mi!! Pero qué feliz soy de poder celebrarlo a tu lado :) ', 'img': '/Images/9.jpg', 'color': 'DarkGoldenRod' });
            //res.json({ 'msg': 'Lo importante en la vida es aprender a tomar las riendas , elegir el camino, y disfrutar el paisaje', 'img': '/Images/caballos.jpg', 'color': 'bisque', 'secret': 'ponte ropa cómoda!', 'otherFile': '/OtherFiles/poni.mp3' });
            res.json({ 'img': '/Images/gelieg.png', 'color': 'black' });
            break;



    }

    
});


module.exports = router;
