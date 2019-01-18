import { connect } from 'react-redux'
import TopPage from '../components/TopPage.js'
import { changeFlag, changeInputWorryTitleValue, inputWorryValueSubmit, disPlayPostView, pageTransition } from "../actions/top_page";

function mapStateToProps(state) {
  return {
  	formData: state.rootReducer.topPageReducer.formData
  }
}

function mapDispatchToProps(dispatch) {
  return {
  	changeFlag(flagName, bool) {
  		dispatch(changeFlag(flagName, bool))
	  },
	  changeInputWorryTitleValue(value) {
  		dispatch(changeInputWorryTitleValue(value))
	  },
	  inputWorryValueSubmit(value) {
  		dispatch(inputWorryValueSubmit(value))
	  },
	  disPlayPostView(){
  		dispatch(disPlayPostView())
	  },
	  pageTransition(path){
  		dispatch(pageTransition(path))
	  }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(TopPage)