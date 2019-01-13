import { connect } from 'react-redux'
import { toggleDrawer, pageTransition } from '../actions/app_header'
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
		},
		pageTransition(path){
			dispatch(pageTransition(path))
		}
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(AppHeader)

