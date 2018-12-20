var m = require("mithril");

var contacter = require("../models/contacter");

module.exports = {
    oninit: function (vnode) {
        contacter.getQuestions(vnode.attrs.kmom);
    },
    view: function (vnode) {
        return [
            m("h2", vnode.attrs.kmom),
            m("div.questions", contacter.questions.map(function(question) {
                return m("div.question", [
                    m("p", [
                        m("strong", question.question)
                    ]),
                    m("p", question.answer)
                ]);
            }))
        ];
    }
};
