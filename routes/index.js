/*单一入口*/
var router = require('koa-router')();
var path = require('path');
var Util = require('../libs/util');
var assign = require('object-assign');
var assetLoader = require('../libs/assetloader');

var tobi = {
    name: 'tobi',
    species: 'ferret1'
};

router.get('/', function*(next) {
    this.status = 301;
    this.redirect('/index/');
});

router.get('/index/*', function*(next) {
    this.body = yield this.render('index', assign({
        user: tobi
    }, assetLoader));
});

Util.walk(path.resolve(__dirname), function(err, routes) {
    routes.forEach(function(route) {
        if (route.indexOf('index.js') == -1) {
            require(route)(router);
        }
    });
});

module.exports = router;
