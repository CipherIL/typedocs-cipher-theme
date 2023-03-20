"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.toolbar = void 0;
const typedoc_1 = require("typedoc");
const path = require('path');
const toolbar = (context, props) => {
    const ops = require(path.resolve('theme-ops.json'));
    const iconPath = ops.icon;
    return typedoc_1.JSX.createElement("div", { id: 'cipher-toolbar' },
        iconPath && typedoc_1.JSX.createElement("img", { src: iconPath, class: 'toolbar-item', id: 'toolbar-icon' }),
        typedoc_1.JSX.createElement("div", { class: 'toolbar-item', id: 'toolbar-title' }, ops.title || 'Cipher-Docs'));
};
exports.toolbar = toolbar;
