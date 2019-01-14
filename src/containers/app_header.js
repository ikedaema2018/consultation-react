import { connect } from 'react-redux'
import { toggleDrawer, pageTransition, logoutAction } from '../actions/app_header'
import AppHeader from '../components/AppHeader'

function mapStateToProps(state) {
	return {
		profileFlag: state.rootReducer.appHeaderReducer.profileFlag,
		logoutFlag: state.rootReducer.appHeaderReducer.logoutFlag
	}
}

function mapDispatchToProps(dispatch) {
	return {
		toggleDrawer(flagName, bool) {
			dispatch(toggleDrawer(flagName, bool))
		},
		pageTransition(path){
			dispatch(pageTransition(path))
		},
		logoutAction() {
			dispatch(logoutAction())
		}
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(AppHeader)

