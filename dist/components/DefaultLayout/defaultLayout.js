"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.defaultLayout = void 0;
const typedoc_1 = require("typedoc");
const path = require('path');
const defaultLayout = (context, props) => {
    return typedoc_1.JSX.createElement("html", { class: 'default' },
        renderHead(context, props),
        renderBody(context, props));
};
exports.defaultLayout = defaultLayout;
const renderHead = (context, props) => {
    const cssPath = path.join(__dirname, '../../../dist/main.css');
    return typedoc_1.JSX.createElement("head", null,
        typedoc_1.JSX.createElement("meta", { charSet: 'utf-8' }),
        context.hook('head.begin'),
        typedoc_1.JSX.createElement("meta", { "http-equiv": "x-ua-compatible", content: "IE=edge" }),
        typedoc_1.JSX.createElement("title", null, props.model.name === props.project.name
            ? props.project.name
            : `${props.model.name} | ${props.project.name}`),
        typedoc_1.JSX.createElement("meta", { name: "description", content: 'Documentation for ' + props.project.name }),
        typedoc_1.JSX.createElement("meta", { name: "viewport", content: "width=device-width, initial-scale=1" }),
        typedoc_1.JSX.createElement("link", { rel: "stylesheet", href: cssPath }),
        context.hook('head.end'));
};
const renderBody = (context, props) => {
    return typedoc_1.JSX.createElement("body", null,
        context.hook('body.begin'),
        context.toolbar(props),
        context.footer());
};
