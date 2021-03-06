import { connect } from 'react-redux'
import { inputLoginForm, loadLogin, loginAction, loginSuccess, toggleFlag } from '../actions/login'
import Login from '../components/Login'

function mapStateToProps (state) {
	
	return {
		data: state.rootReducer.loginReducer.data,
		message: state.rootReducer.loginReducer.message,
		loadFlag: state.rootReducer.loginReducer.loadFlag,
		loginFlag: state.rootReducer.loginReducer.loginFlag
	}
}

function mapDispatchToProps (dispatch) {
	return {
		inputLoginForm(info){
			dispatch(inputLoginForm(info))
		},
		loadLogin(){
			dispatch(loadLogin())
		},
		loginAction(info) {
			dispatch(loginAction(info))
		},
		loginSuccess() {
			dispatch(loginSuccess())
		},
		toggleFlag(flagName, bool) {
			dispatch(toggleFlag(flagName, bool))
		}
	}
}


export default connect(mapStateToProps, mapDispatchToProps)(Login)