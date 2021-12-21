'use strict';

var server = require('server');

var cache = require('*/cartridge/scripts/middleware/cache');


/**
 * Death - Star : This will return some star wars info
 * @name Death-Star
 * @function
 * @memberof Page
 * @param {middleware} - server.middleware.include
 * @param {category} - non-sensitive
 * @param {renders} - isml
 * @param {serverfunction} - get
 */
server.include(
    'Star',
    server.middleware.include,
    cache.applyDefaultCache,
    function (req, res, next) {

        res.render('death');

        next();
    }
);

module.exports = server.exports();

// server.get(
//     'Include',
//     server.middleware.include,
//     cache.applyDefaultCache,
//     function (req, res, next) {
//         var ContentMgr = require('dw/content/ContentMgr');
//         var Logger = require('dw/system/Logger');
//         var ContentModel = require('*/cartridge/models/content');

//         var apiContent = ContentMgr.getContent(req.querystring.cid);

//         if (apiContent) {
//             var content = new ContentModel(apiContent, 'components/content/contentAssetInc');
//             if (content.template) {
//                 res.render(content.template, { content: content });
//             } else {
//                 Logger.warn('Content asset with ID {0} is offline', req.querystring.cid);
//                 res.render('/components/content/offlineContent');
//             }
//         } else {
//             Logger.warn('Content asset with ID {0} was included but not found',
//                 req.querystring.cid);

//             res.render('/components/content/offlineContent');
//         }
//         next();
//     }
// );
