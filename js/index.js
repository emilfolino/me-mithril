var m = require("mithril");

var me = require("./views/me");
var report = require("./views/report");
var layout = require("./views/layout");

m.route(document.body, "/", {
    "/": {
        render: function() {
            return m(layout, m(me));
        }
    },
    "/reports/:kmom": {
        render: function(vnode) {
            return m(layout, m(report, vnode.attrs));
        }
    }
});
