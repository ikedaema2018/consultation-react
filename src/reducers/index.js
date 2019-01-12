import { combineReducers } from 'redux'
import  { registerInfosReducer }  from './register_infos'
import { loginReducer } from './login'

export default combineReducers({
	registerInfosReducer: registerInfosReducer,
	loginReducer: loginReducer
})