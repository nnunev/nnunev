'use strict';

/**
 * @namespace Home
 */


var server = require('server');
server.extend(module.superModule);
var HookMgr = require('dw/system/HookMgr');
/**
 * Create a custom cartridge that extends the Home-Show endpoint as adds some JSON data to the view data.
 */
/**
 * Homework2-Show : This endpoint is called when a shopper navigates to the https://aaay-035.sandbox.us01.dx.commercecloud.salesforce.com/on/demandware.store/Sites-RefArch-Site/en_US/homework2-Show
 * @name Base/Homework2-Show
 * @function
 * @memberof Homework2
 * @param {middleware} - consentTracking.consent
 * @param {middleware} - cache.applyDefaultCache
 * @param {category} - non-sensitive
 * @param {renders} - isml
 * @param {serverfunction} - get
 */
server.append('Show', function (req, res, next) {
    var viewData = res.getViewData();
    if (!viewData.customer) {
        next();
    } else {
        if (HookMgr.hasHook('app.experience.editmode')) {
            HookMgr.callHook(
                'app.experience.editmode',
                'editmode'
            );
        }

        viewData.customer.myData = [{
            text: 'Lorem ',
            friend1: 'Nick'
        }, {
            text: 'ipsum',
            friend2: 'RoRo'
        }, {
            text: 'dolor',
            friend3: 'BotBot'
        }];
    }


    res.setViewData(viewData);
    /* res.json({
        renderedTemplate: renderTemplateHelper.getRenderedHtml(viewData, viewData.template)
    });*/

    next();
});

module.exports = server.exports();
