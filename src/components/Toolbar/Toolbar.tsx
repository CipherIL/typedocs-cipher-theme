import {DefaultThemeRenderContext, PageEvent, Reflection, JSX} from 'typedoc';
import {ThemeOps} from '../../types/theme-ops';

const path = require('path');

export const toolbar = (context: DefaultThemeRenderContext, props: PageEvent<Reflection>) => {
	const ops = require(path.resolve('theme-ops.json')) as ThemeOps;
	const iconPath = ops.icon;
	return <div id={'cipher-toolbar'}>
		{iconPath && <img src={iconPath} class={'toolbar-item'} id={'toolbar-icon'}/>}
		<div class={'toolbar-item'} id={'toolbar-title'}>{ops.title || 'Cipher-Docs'}</div>
	</div>;
};