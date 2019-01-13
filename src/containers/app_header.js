import { connect } from 'react-redux'
import { toggleDrawer } from '../actions/app_header'
import AppHeader from '../components/AppHeader'

function mapStateToProps(state) {
	return {
		profileFlag: state.rootReducer.appHeaderReducer.profileFlag
	}
}

function mapDispatchToProps(dispatch) {
	return {
		toggleDrawer(flagName, bool) {
			dispatch(toggleDrawer(flagName, bool))
		}
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(AppHeader)

