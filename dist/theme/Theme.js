"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CipherTheme = void 0;
const typedoc_1 = require("typedoc");
const ThemeContext_1 = require("./ThemeContext");
/**
 * Entry point of the Cipher theme
 */
class CipherTheme extends typedoc_1.DefaultTheme {
    getRenderContext() {
        this._contextCache || (this._contextCache = new ThemeContext_1.ThemeContext(this, this.application.options));
        return this._contextCache;
    }
}
exports.CipherTheme = CipherTheme;
