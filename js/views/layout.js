var m = require("mithril");

module.exports = {
    view: function(vnode) {
        return m("main.app", [
            m("nav", [
                m("ul", [
                    m("li", [
                        m("a", {
                            href: "/",
                            oncreate: m.route.link
                        }, "Me")
                    ]),
                    m("li", [
                        m("a", {
                            href: "/reports/kmom01",
                            oncreate: m.route.link
                        }, "kmom01")
                    ]),
                ])
            ]),
            m("section", vnode.children)
        ]);
    }
};
