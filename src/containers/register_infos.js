import { connect } from 'react-redux'
import { inputRegisterInfo, sendRegisterInfo } from "../actions/resister_infos"
import RegisterForm from '../components/register_infos'

function mapStateToProps({ data, message, sendFlag }) {
	return {
		data,
		message,
		sendFlag
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