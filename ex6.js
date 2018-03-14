'use strict';

var request = require("request");

function getData() {
    get('/api/persons/2948', function(data) {
        var code = data.code;
        var name = data.name;
        get('/api/health-insurance/' + code, function(data) {
            var insured = data.isInsured;
            get('/api/tax-debt/' + code, function(data) {
                var result = {
                    name: name,
                    isInsured: insured,
                    taxDebt: data.debt
                }
                console.log(result);
            });
        });
    });
}

getData();

// helper function
function get(url, cb) {
    request('http://localhost:3000' + url, function(error, response, body) {
        cb(JSON.parse(body));
    });
}
