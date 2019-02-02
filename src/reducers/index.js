import { combineReducers } from 'redux'
import  { registerInfosReducer }  from './register_infos'
import { loginReducer } from './login'
import { appHeaderReducer } from './app_header'
import { topPageReducer } from './top_page'
import { worryPageReducer } from './worry_page'

export default combineReducers({
	registerInfosReducer: registerInfosReducer,
	loginReducer: loginReducer,
	appHeaderReducer: appHeaderReducer,
	topPageReducer: topPageReducer,
	worryPageReducer: worryPageReducer
})