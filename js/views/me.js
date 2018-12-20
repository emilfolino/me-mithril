var m = require("mithril");

var contacter = require("../models/contacter");

module.exports = {
    oninit: contacter.getMe,
    view: function () {
        return [
            m("h1", "Me"),
            m("p", contacter.meText)
        ];
    }
};
