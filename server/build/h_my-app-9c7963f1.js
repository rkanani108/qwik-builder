'use strict';

var core = require('./core-d5d598ad.js');

const Footer_onRender = /*#__PURE__*/ core.qHook(()=>{
    return core.h(core.Fragment, null, core.h("hr", null), core.h("p", {
        style: {
            'text-align': 'center'
        }
    }, "Made with ❤️ by", ' ', core.h("a", {
        target: "_blank",
        href: "https://www.builder.io/"
    }, "Builder.io")));
});

exports.Footer_onRender = Footer_onRender;
