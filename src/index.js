import React from 'react';
import { createStore } from 'redux'
import ReactDOM from 'react-dom';
// import App from './components/App';
import registerInfosReducer from './reducers/register_infos'
import { Provider } from 'react-redux'
import RegisterForm from './containers/register_infos'


const store = createStore(registerInfosReducer)

ReactDOM.render(
	<Provider store={store}>
		< RegisterForm />
	</Provider>
	,
	document.getElementById('root')
);


