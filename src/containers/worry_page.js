import { connect } from 'react-redux'
import WorryPage from '../components/WorryPage'
import { changeFlagList, fetchComment, changeCommentValue } from '../actions/worry_page'

function mapStateToProps(state) {
	return {
		flagList: state.rootReducer.worryPageReducer.flagList,
		worryData: state.rootReducer.worryPageReducer.worryData,
		commentManagement: state.rootReducer.worryPageReducer.commentManagement
	}
}

function mapDispatchToProps(dispatch) {
	return {
		changeFlagList(flagName, bool) {
			dispatch(changeFlagList(flagName, bool))
		},
		fetchComment(id) {
			dispatch(fetchComment(id))
		},
		changeCommentValue(value) {
			dispatch(changeCommentValue(value))
		}
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(WorryPage)
