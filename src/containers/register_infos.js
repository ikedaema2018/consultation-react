import { connect } from 'react-redux'
import { inputRegisterInfo, sendRegisterInfo } from "../actions/resister_infos"
import RegisterForm from '../components/register_infos'

function mapStateToProps(state) {
	return {
		data: state.rootReducer.registerInfosReducer.data,
		message: state.rootReducer.registerInfosReducer.message,
		sendFlag: state.rootReducer.registerInfosReducer.sendFlag,
		registerModalFlag: state.rootReducer.registerInfosReducer.registerModalFlag,
		registerModalStatus: state.rootReducer.registerInfosReducer.registerModalStatus
	}
}



function mapDispatchToProps(dispatch) {
	return {
		inputRegisterInfo(info) {
			dispatch(inputRegisterInfo(info))
		},
		sendRegisterInfo(userInfo) {
			dispatch(sendRegisterInfo(userInfo))
		}
	}
}

export default connect(mapStateToProps, mapDispatchToProps) (RegisterForm)