import {DefaultTheme, DefaultThemeRenderContext, JSX, Options} from 'typedoc';
import * as components from '../components';

type Component = (context: DefaultThemeRenderContext, model: any) => JSX.Element | void;

function bind<T>(component: Component, context: ThemeContext) {
	return (model: any) => component(context, model);
}

export class ThemeContext extends DefaultThemeRenderContext {
	constructor(theme: DefaultTheme, options: Options) {
		super(theme, options);
		for (const [key, component] of Object.entries(components)) {
			this[key as keyof ThemeContext] = bind(component, this) as any;
		}
	}
}