var assets = require('../views/assets');
var _ = require('underscore');

function _requireJs(jsList) {
    if (!_.isArray(jsList)) {
        return '';
    }

    var tempArr = [];

    _.each(jsList, function(js) {
        var jsAsset = assets[js];
        if (jsAsset) {
            tempArr.push('<script src=\'' + jsAsset['js'] + '\'></script>')
        }
    });

    return tempArr.join('');
}

function _requireCss(cssList) {

}

module.exports = {
    requireJs: _requireJs,
    requireCss: _requireCss
};
