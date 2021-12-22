'use strict';
/**
 * @namespace Star
 *
 */
var server = require('server');

var cache = require('*/cartridge/scripts/middleware/cache');
var starWarsService = require('*/cartridge/scripts/starWarsService.js');


/**
 * Star-Wars : This will return some star wars info
 * @name Star-Wars
 * @function
 * @memberof Page
 * @param {middleware} - server.middleware.include
 * @param {category} - non-sensitive
 * @param {renders} - isml
 * @param {serverfunction} - get
 */
server.get(
    'Wars',
    server.middleware.include,
    cache.applyDefaultCache,
    function (req, res, next) {

        // var httpClient = new dw.net.HTTPClient();
        // httpClient.open('GET', 'https://swapi.dev/api/starships/9/');
        // httpClient.setTimeout(3000);
        // httpClient.send();

        // var starWars = JSON.parse(httpClient.text);

        var starWars = starWarsService.getStarWars();

        res.render('star', { starWars: starWars });

        next();
    }
);

module.exports = server.exports();
