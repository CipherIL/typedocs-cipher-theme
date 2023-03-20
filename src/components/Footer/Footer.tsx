import {DefaultThemeRenderContext, JSX, PageEvent, Reflection} from 'typedoc';

export const footer = (context: DefaultThemeRenderContext, props: PageEvent<Reflection>) => {
	return <div id={'cipher-footer'}>
		<span>Designed by</span>
		<a href={'https://github.com/CipherIL'} target={'_blank'}>Cipher</a>
	</div>;
};