'use strict';

var core = require('./core-d5d598ad.js');

const Header_onRender = /*#__PURE__*/ core.qHook(()=>{
    return core.h("p", {
        style: {
            'text-align': 'center'
        }
    }, core.h("a", {
        href: "https://github.com/builderio/qwik"
    }, core.h("img", {
        alt: "Qwik Logo",
        width: 400,
        src: "https://cdn.builder.io/api/v1/image/assets%2FYJIGb4i01jvw0SRdL5Bt%2F667ab6c2283d4c4d878fb9083aacc10f"
    })));
});

exports.Header_onRender = Header_onRender;
