import { combineReducers } from 'redux'
import  { registerInfosReducer }  from './register_infos'

export default combineReducers({
	registerInfosReducer: registerInfosReducer
})