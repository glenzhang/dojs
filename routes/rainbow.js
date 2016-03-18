var rainbow = require('../controllers/rainbow');

module.exports = function(router) {
    router.get('/api/demo', function*(next) {
        //demo.save();
        this.body = {key: 'value', hello: 'world'};
    });
};