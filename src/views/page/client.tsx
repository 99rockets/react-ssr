import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {BrowserRouter} from 'react-router-dom';
import {HelmetProvider} from 'react-helmet-async';

import '../publicPath';
import {createStore} from '../../client/stores';
import {App} from '../../client/containers/App';

const preloadedState = (window as any).__data;
const store = createStore(preloadedState);

ReactDOM.hydrate(
	<HelmetProvider>
		<Provider store={store}>
			<BrowserRouter>
				<App />
			</BrowserRouter>
		</Provider>
	</HelmetProvider>,
	document.getElementById('root')
);
