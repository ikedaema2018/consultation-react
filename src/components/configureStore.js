import {
	createStore as reduxCreateStore,
	combineReducers,
	applyMiddleware } from 'redux'
import rootReducer from '../reducers'
import { routerReducer, routerMiddleware } from 'react-router-redux'
import logger from 'redux-logger'
import thunk from 'redux-thunk'

export default function createStore(history) {
	return reduxCreateStore(
		combineReducers({
			rootReducer,
			routerReducer
		}),
		applyMiddleware(
			routerMiddleware(history),
			logger,
			thunk
		)
	)
}