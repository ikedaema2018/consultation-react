import { connect } from 'react-redux'
import { inputRegisterInfo, sendRegisterInfo } from "../actions/resister_infos"
import RegisterForm from '../components/register_infos'

function mapStateToProps(state) {
	return {
		data: state.registerInfosReducer.data,
		message: state.registerInfosReducer.message,
		sendFlag: state.registerInfosReducer.sendFlag,
		registerFlag: state.registerInfosReducer.registerFlag
	}
}



function mapDispatchToProps(dispatch) {
	return {
		inputRegisterInfo(info) {
			dispatch(inputRegisterInfo(info))
		},
		sendRegisterInfo() {
			dispatch(sendRegisterInfo())
		}
	}
}

export default connect(mapStateToProps, mapDispatchToProps) (RegisterForm)