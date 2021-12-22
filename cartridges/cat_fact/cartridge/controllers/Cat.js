'use strict';
/**
 * @namespace Cat
 *
 */
var server = require('server');

var cache = require('*/cartridge/scripts/middleware/cache');


/**
 * Cat-Fact : This will return some star wars info
 * @name Cat-Fact
 * @function
 * @memberof Page
 * @param {middleware} - server.middleware.include
 * @param {category} - non-sensitive
 * @param {renders} - isml
 * @param {serverfunction} - get
 */
server.get(
    'Fact',
    server.middleware.include,
    cache.applyDefaultCache,
    function (req, res, next) {
    
        var httpClient = new dw.net.HTTPClient();
        httpClient.open('GET', 'https://catfact.ninja/fact');
        httpClient.setTimeout(3000);
        httpClient.send();
    
        
        
        
        var catFact = JSON.parse(httpClient.text);

        res.render('cat', { catFact: catFact });

        next();
    }
);

module.exports = server.exports();
