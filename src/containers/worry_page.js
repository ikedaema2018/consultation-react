import { connect } from 'react-redux'
import WorryPage from '../components/WorryPage'
import { changeFlagList, fetchComment, changeCommentValue, submitComment, commentViewDisplay, pageTransition, resetState } from '../actions/worry_page'

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
		},
		submitComment(value, worry_comment_id) {
			dispatch(submitComment(value, worry_comment_id))
		},
		commentViewDisplay() {
			dispatch(commentViewDisplay())
		},
		pageTransition(path) {
			dispatch(pageTransition(path))
		},
		resetState() {
			dispatch(resetState())
		}
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(WorryPage)
