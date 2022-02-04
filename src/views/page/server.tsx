import React from 'react';
import {Provider} from 'react-redux';
import {HelmetProvider} from 'react-helmet-async';
import {renderToString} from 'react-dom/server';
import {StaticRouter} from 'react-router-dom/server';

import '../publicPath';
import {createStore} from '../../client/stores';
import {App} from '../../client/containers/App';

type ServerRendererOptions = {
	/** Application state */
	preloadedState: object;
	/** URL from server */
	url: string;
};

const serverRenderer = ({preloadedState, url}: ServerRendererOptions) => {
	const store = createStore(preloadedState);
	const state = store.getState();
	const helmetContext: any = {};

	const content = renderToString(
		<HelmetProvider context={helmetContext}>
			<Provider store={store}>
				<StaticRouter location={url}>
					<App />
				</StaticRouter>
			</Provider>
		</HelmetProvider>
	);

	const {helmet} = helmetContext;
	const title = helmet.title.toString();
	const meta = helmet.meta.toString();

	return {
		title,
		meta,
		content,
		preloadedState: state
	};
};

export default serverRenderer;
