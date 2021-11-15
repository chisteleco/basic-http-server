
module.exports=function () {
        let homeRoutes = require('./homeRoutes');
        let gardenRoutes = require('./gardenRoutes');
        let poolRoutes = require('./poolRoutes');
        let securityRoutes = require('./securityRoutes');

        let decRoutes = require('./decRoutes');

        let routes = {
            home: homeRoutes,
            garden: gardenRoutes,
            pool: poolRoutes,
            security: securityRoutes,
            dec: decRoutes
        };

        return routes;
    }

