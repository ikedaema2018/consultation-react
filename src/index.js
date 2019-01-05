import React from 'react';
import ReactDOM from 'react-dom';
// import App from './components/App';
import { Provider } from 'react-redux'
import RegisterForm from './containers/register_infos'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import configureStore from './stores/configureStore'


const store = configureStore()

ReactDOM.render(
	<Provider store={store}>
		<Router>
			<Route path={"/"} component={RegisterForm} />
		</Router>
	</Provider>
	,
	document.getElementById('root')
);


