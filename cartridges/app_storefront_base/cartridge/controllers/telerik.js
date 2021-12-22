'use strict';

/**
 * @namespace telerik
 */

var server = require('server');
var cache = require('*/cartridge/scripts/middleware/cache');
var consentTracking = require('*/cartridge/scripts/middleware/consentTracking');
var pageMetaData = require('*/cartridge/scripts/middleware/pageMetaData');

// /**
//  * Any customization on this endpoint,______________________ also requires update for Default-Start endpoint
//  */
// /**
//  * Home-Show : This endpoint is called when a shopper navigates to the home page
//  * @name Base/Home-Show
//  * @function
//  * @memberof Home
//  * @param {middleware} - consentTracking.consent
//  * @param {middleware} - cache.applyDefaultCache
//  * @param {category} - non-sensitive
//  * @param {renders} - isml
//  * @param {serverfunction} - get
//  */
// server.get('Show', consentTracking.consent, cache.applyDefaultCache, function (req, res, next) {
//     var Site = require('dw/system/Site');
//     res.render('telerik/home' );
//     //,
//     //    {welcomeMsg : 'Welcome User'}
//     next();
//     }
   
// }, pageMetaData.computedPageMetaData);

var HttpParameterMap = require('dw/web/HttpParameterMap');
server.get('List', function (req, res, next) {
    var query = req.HttpParameterMap.query
    res.render('telerik/searchResults', {query : query} );

}, pageMetaData.computedPageMetaData);
module.exports = server.exports();
