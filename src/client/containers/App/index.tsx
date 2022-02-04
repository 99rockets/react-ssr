import React from 'react';
import {Routes, Route} from 'react-router-dom';
import {Helmet} from 'react-helmet-async';
import {Global} from '@emotion/react';
import {connect} from 'react-redux';
import {Page} from '../../components/Page';

import {GlobalStyles} from './styled';

import type {State} from '../../types';

/** Main app component */
const AppComponent = (props: State) => (
	<>
		<Global styles={GlobalStyles} />
		<Helmet
			title='99rockets'
			meta={[{
				name: 'description',
				content: 'Personal page'
			}]}
		/>
		<Routes>
			<Route path='/' element={<Page {...props} />} />
		</Routes>
	</>
);

const mapState = (state: State) => ({
	title: state.title
});

export const App = connect(mapState)(AppComponent);
