import {configureStore} from '@reduxjs/toolkit';
import {titleReducer} from './title';

/** Redux store configuration */
export const createStore = (preloadedState: object) => (
	configureStore({
		preloadedState,
		reducer: {
			title: titleReducer
		}
	})
);
