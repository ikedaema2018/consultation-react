import { connect } from 'react-redux'
import { inputRegisterInfo } from "../actions/resister_infos"
import RegisterForm from '../components/register_infos'

function mapStateToProps({ data, message }) {
	return {
		data,
		message
	}
}

function mapDispatchToProps(dispatch) {
	return {
		inputRegisterInfo(info) {
			dispatch(inputRegisterInfo(info))
		}
	}
}

export default connect(mapStateToProps, mapDispatchToProps) (RegisterForm)