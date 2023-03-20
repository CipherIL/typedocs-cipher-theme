"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.footer = void 0;
const typedoc_1 = require("typedoc");
const footer = (context, props) => {
    return typedoc_1.JSX.createElement("div", { id: 'cipher-footer' },
        typedoc_1.JSX.createElement("span", null, "Designed by"),
        typedoc_1.JSX.createElement("a", { href: 'https://github.com/CipherIL', target: '_blank' }, "Cipher"));
};
exports.footer = footer;
