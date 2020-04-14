var m = require("mithril");

var contacter = {
    meText: "",
    questions: [],

    getMe: function() {
        return m.request({
            method: "GET",
            url: "https://me-api.jsramverk.se"
        }).then(function(data) {
            contacter.meText = data.description;
        });
    },

    getQuestions: function(kmom) {
        return m.request({
            method: "GET",
            url: "https://me-api.jsramverk.se/reports/" + kmom
        }).then(function(data) {
            contacter.questions = data.data;
        });
    }

};

module.exports = contacter;
