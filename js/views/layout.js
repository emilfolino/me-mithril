var m = require("mithril");

module.exports = {
    view: function(vnode) {
        return m("main.app", [
            m("nav", [
                m("ul", [
                    m("li", [
                        m("a", {
                            href: "#!/"
                        }, "Me")
                    ]),
                    m("li", [
                        m("a", {
                            href: "#!/reports/kmom01"
                        }, "kmom01")
                    ]),
                ])
            ]),
            m("section", vnode.children)
        ]);
    }
};
