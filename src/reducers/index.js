import { combineReducers } from 'redux'
import  { registerInfosReducer }  from './register_infos'
import { loginReducer } from './login'
import { appHeaderReducer } from './app_header'

export default combineReducers({
	registerInfosReducer: registerInfosReducer,
	loginReducer: loginReducer,
	appHeaderReducer: appHeaderReducer
})