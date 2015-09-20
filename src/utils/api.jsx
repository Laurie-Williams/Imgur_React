var Fetch = require("whatwg-fetch");

//Root URL
var rootUrl = "https://api.imgur.com/3/";
var apiKey = "a06fc3fae2fb883";

Api = {
    get: function(url){
        return fetch((rootUrl + url), {
            headers: {"Authorization": ("Client-ID " + apiKey)}
            }
        ).then(function(response){
                return response.json();
            });
    }
};

module.exports = Api;