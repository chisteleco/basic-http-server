var express = require('express');
var router = express.Router();

// define the garden home page route
router.get('/', function (req, res) {

    let _date = new Date();

    let date = _date.toDateString().slice(4);
    console.log(date);

    switch (date) {

        case 'Nov 15 2021':
            res.json({ 'msg': '\u00BFRecuerdas c\u00F3mo se llamaba?', 'img': '/Images/10.gif', 'color': 'bisque', 'secret': 'Busca debajo de la cama', 'otherFile': '/OtherFiles/grabacion.aac' });
            break;
        case 'Dec 3 2021':
            res.json({ 'msg': 'Feliz cumplea\361os!', 'color': 'lightyellow', 'secret': 'Busca debajo de la cama' });
            break;
        case 'Dec 4 2021':
            res.json({ 'msg': '\u00BFRecuerdas c\u00F3mo se llamaba?', 'img': '/Images/3.jpg', 'color': 'bisque', 'secret': 'Busca debajo de la cama', 'otherFile': '/OtherFiles/grabacion.aac' });
            break;
        case 'Dec 5 2021':
            res.json({ 'msg': 'Hoy has ganado..... un masaje!!', 'img': '/Images/4.jpg', 'color': 'DarkGoldenRod'});
            break;
        case 'Dec 6 2021':
            res.json({ 'msg': 'Hoy has ganado..... un masaje!!', 'img': '/Images/10.gif', 'color': 'DarkGoldenRod' });
            break;
        case 'Dec 7 2021':
            break;
        case 'Dec 8 2021':
            break;
        case 'Dec 9 2021':
            break;
        case 'Dec 10 2021':
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
            res.send('Parece que no hay nada para ti');
            break;



    }

    
});


module.exports = router;
