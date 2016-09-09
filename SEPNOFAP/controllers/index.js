'use strict';

var IndexModel = require('../models/index');


module.exports = function (router) {

    var model = new IndexModel();

    router.get('/', function (req, res) {
        
        res.send('<code><pre>' + JSON.stringify(model, null, 2) + '</pre></code>');
        
    });
    
    router.post('/', function(req, res)){
        
        res.send('<code><pre>' + req.body + '</pre></code>');
    }

};
