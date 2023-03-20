"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.load = void 0;
const Theme_1 = require("./theme/Theme");
/**
 * Called by TypeDoc when loading this theme as a plugin. Should be used to define themes which
 * can be selected by the user.
 */
function load(app) {
    app.renderer.defineTheme('typedocs-cipher-theme', Theme_1.CipherTheme);
}
exports.load = load;
