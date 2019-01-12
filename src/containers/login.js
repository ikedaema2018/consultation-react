import { connect } from 'react-redux'
import { inputLoginForm, loadLogin, loginAction } from '../actions/login'
import Login from '../components/Login'

function mapStateToProps (state) {
	return {
		data: state.rootReducer.loginReducer.data,
		message: state.rootReducer.loginReducer.message,
		loadFlag: state.rootReducer.loginReducer.loadLogin
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
		}
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(Login)