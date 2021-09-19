
module.exports=function () {
        let homeRoutes = require('./homeRoutes');
        let gardenRoutes = require('./gardenRoutes');
        let poolRoutes = require('./poolRoutes');
        let securityRoutes = require('./securityRoutes');


        let routes = {
            home: homeRoutes,
            garden: gardenRoutes,
            pool: poolRoutes,
            security: securityRoutes
        };

        return routes;
    }

