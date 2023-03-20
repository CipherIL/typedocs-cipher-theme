import {DefaultThemeRenderContext, PageEvent, Reflection, JSX} from 'typedoc';

const path = require('path');

export const defaultLayout = (context: DefaultThemeRenderContext, props: PageEvent<Reflection>) => {
	return <html class={'default'}>
	{renderHead(context, props)}
	{renderBody(context, props)}
	</html>;
};

const renderHead = (context: DefaultThemeRenderContext, props: PageEvent<Reflection>) => {
	const cssPath = path.join(__dirname, '../../../dist/main.css');
	return <head>
		<meta charSet={'utf-8'}/>
		{context.hook('head.begin')}
		<meta http-equiv="x-ua-compatible" content="IE=edge"/>
		<title>{props.model.name === props.project.name
			? props.project.name
			: `${props.model.name} | ${props.project.name}`}
		</title>
		<meta name="description" content={'Documentation for ' + props.project.name}/>
		<meta name="viewport" content="width=device-width, initial-scale=1"/>
		<link rel="stylesheet" href={cssPath}/>
		{context.hook('head.end')}
	</head>;
};

const renderBody = (context: DefaultThemeRenderContext, props: PageEvent<Reflection>) => {
	return <body>
	{context.hook('body.begin')}
	{context.toolbar(props)}
	{context.footer()}
	</body>;
};