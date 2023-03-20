import {DefaultTheme} from 'typedoc';
import {ThemeContext} from './ThemeContext';

/**
 * Entry point of the Cipher theme
 */
export class CipherTheme extends DefaultTheme {
	private _contextCache?: ThemeContext;

	override getRenderContext(): ThemeContext {
		this._contextCache ||= new ThemeContext(this, this.application.options);
		return this._contextCache;
	}
}