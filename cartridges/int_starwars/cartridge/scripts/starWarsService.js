'use strict';

/**
 * @namespace StarWarsService
 */

 /**
  * StarWarsService-Get : This service collects star wars data and send it to Star controller
  * @name int_starwars/StarWarsService
  * @function
  * @param {returns} - json
  * @param {serverfunction} - get
  */

function getStarWars() {
    var getStarWarsService = dw.svc.LocalServiceRegistry.createService("http.starwars.getstarwars",{
        createRequest: function (svc, args) {
            svc.setRequestMethod("GET");
            return args;
        },
        parseResponse: function (svc, client) {
            return client.text;
        },
        filterLogMessage: function(msg) {
            return msg.replace('cost_in_credits', '$$$$$$$$$$$$$$$$$$$');
        }
    });

    var response = getStarWarsService.call().object;
    return JSON.parse(response);

}

module.exports = {
    getStarWars: getStarWars
};
