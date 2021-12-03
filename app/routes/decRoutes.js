var express = require('express');
var router = express.Router();

// define the garden home page route
router.get('/', function (req, res) {

    let _date = new Date();

    let date = _date.toDateString().slice(4);
    console.log(date);


    switch (date) {

        case 'Dec 03 2021'://pista sakale debajo de la cama
            res.json({ 'msg': 'Cumplea\361os feliz!!!Cumplea\361os feliz!!!', 'img': '/Images/30.jpg', 'color': 'lightgreen', 'secret': 'Busca debajo de la cama', 'otherFile': '/OtherFiles/grabacion.aac' });
            break;
        case 'Dec 04 2021'://caballitos
            res.json({ 'msg': 'Lo importante en la vida es aprender a tomar las riendas , elegir el camino, y disfrutar el paisaje', 'img': '/Images/caballos.jpg', 'color': 'bisque', 'secret': 'ponte ropa c\u00F3moda!', 'otherFile': '/OtherFiles/poni.mp3' });
            break;
        case 'Dec 05 2021'://churros
            res.json({ 'msg': 'Hoy toca..... churros!!', 'img': '/Images/churros.jpg', 'color': 'DarkGoldenRod', 'secret': 'churros para mi churri ^^'});
            break;
        case 'Dec 06 2021': //masaje
            res.json({ 'msg': 'Hoy has ganado..... un masaje!!', 'img': '/Images/10.gif', 'color': 'DarkGoldenRod' });
            break;
        case 'Dec 07 2021': //pista detrás de halcón
            res.json({ 'img': '/Images/gelieg.png', 'color': 'black' });
            break;
        case 'Dec 08 2021'://TODO
            res.json({ 'msg':'Hoy es 8!','color':'blue'});
            break;
        case 'Dec 09 2021': //piruletas!
            res.json({ 'msg':'Te acuerdas? :)','img':'/Images/piruletas.jfif','color': 'lightblue', 'secret':'Hay 5 escondidas por la casa. Dulce b\u00F9squeda!!!'});
            break;
        case 'Dec 10 2021'://mi cumple
            res.json({ 'msg': 'Hoy me toca a mi!! Pero qu\u00E9 feliz soy de poder celebrarlo a tu lado :) ', 'img': '/Images/9.jpg', 'color': 'DarkGoldenRod' });
            break;
        case 'Dec 11 2021': //debajo del gato  hay algo
            res.json({ 'msg': 'Y ooootra vez, no aprendo!!! NO DOY UNA!!!Siempre lo coloco mal', 'img':'/Images/Ignatius.png','color': 'DarkGoldenRod' });
            break;
        case 'Dec 12 2021'://Peli
            res.json({ 'msg': 'Tras una buena comilona, nada mejor que sof\u00E1 y peli. Tu eliges :)', 'img': '/Images/movies.jpg', 'color': 'lightblue' });
            break;
        case 'Dec 13 2021'://TODO
            break;
        case 'Dec 14 2021'://TODO
            res.json({ 'msg': 'El secreto de la juventud?', 'img': '/Images/5.jpg', 'color': 'lightgreen'});
            break;
        case 'Dec 15 2021'://TODO
            break;
        case 'Dec 16 2021': //Viaje!!!
            res.json({ 'msg': 'Hoy toca, vacaciones navide\361as! viva!!', 'img': '/Images/alsacia.jpg', 'color': 'DarkGoldenRod' });
            break;
        case 'Dec 17 2021'://TODO
            break;
        case 'Dec 18 2021'://TODO
            break;
        case 'Dec 19 2021'://TODO
            break;
        case 'Dec 20 2021'://TODO
            break;
        case 'Dec 21 2021'://TODO
            break;
        case 'Dec 22 2021'://TODO
            res.json({ 'msg': 'El premio es compartir la vida contigo :)', 'img': '/Images/calvo.jpg', 'color': 'DarkGoldenRod' });
            break;
        case 'Dec 23 2021':
            res.json({ 'msg': '\u00BFRecuerdas el c\u00F3digo oculto de ayer?', 'color': 'DarkGoldenRod' });
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
