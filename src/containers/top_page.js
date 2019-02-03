import { connect } from 'react-redux'
import TopPage from '../components/TopPage.js'
import { changeFlag, changeInputWorryTitleValue, inputWorryValueSubmit, disPlayPostView, pageTransition, receiveWorryData, resetState, changeSort, fetchDataEveryMinute } from "../actions/top_page";

function mapStateToProps(state) {
  return {
  	formData: state.rootReducer.topPageReducer.formData,
	  worryData: state.rootReducer.topPageReducer.worryData,
	  sortData: state.rootReducer.topPageReducer.sortData
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
	  },
	  receiveWorryData() {
		  dispatch(receiveWorryData())
	  },
	  resetState(){
  		dispatch(resetState())
	  },
	  changeSort(sort){
  		dispatch(changeSort(sort))
	  },
	  fetchDataEveryMinute(){
  		dispatch(fetchDataEveryMinute())
	  }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(TopPage)