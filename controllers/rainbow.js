var Rainbow = require('../models/rainbow');

// create
module.exports.save = function() {
    var DemoOne = new Rainbow({name: 'someone', age: '20'});

    DemoOne.save(function(err) {

    });
};

// update
module.exports.update = function * update(id, next) {

};

// read
module.exports.list = function * list(next) {

};

// delete
module.exports.remove = function * remove(id, next) {

};