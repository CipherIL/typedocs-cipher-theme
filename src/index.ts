import {Application} from 'typedoc';
import {CipherTheme} from './theme/Theme';

/**
 * Called by TypeDoc when loading this theme as a plugin. Should be used to define themes which
 * can be selected by the user.
 */
export function load(app: Application) {
	app.renderer.defineTheme('typedocs-cipher-theme', CipherTheme);
}