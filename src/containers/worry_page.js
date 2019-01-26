import { connect } from 'react-redux'
import WorryPage from '../components/WorryPage'
import { changeFlagList, fetchComment } from '../actions/worry_page'

function mapStateToProps(state) {
	return {
		flagList: state.rootReducer.worryPageReducer.flagList,
		worryData: state.rootReducer.worryPageReducer.worryData
	}
}

function mapDispatchToProps(dispatch) {
	return {
		changeFlagList(flagName, bool) {
			dispatch(changeFlagList(flagName, bool))
		},
		fetchComment(id) {
			dispatch(fetchComment(id))
		}
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(WorryPage)
