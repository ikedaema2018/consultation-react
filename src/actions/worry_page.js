import axios from 'axios'
import {push} from "react-router-redux";

export const changeFlagList = (flagName, bool) => ({
  type: "CHANGE_FLAG_LIST",
	payload: {
  	flagName: flagName,
		bool: bool
	}
})

export const successCommentFetch = (value) => ({
	type: "SUCCESS_COMMENT_FETCH",
	payload: {
		value: value
	}
})

export const changeCommentValue = (value) => ({
	type: "CHANGE_COMMENT_VALUE",
	payload: {
		value: value
	}
})

export const successSubmit = () => ({
	type: "SUCCESS_WORRY_COMMENT_SUBMIT",
	payload: {}
})

export const resetState = () => ({
	type: "RESET_STATE_WORRY_PAGE",
	payload: {}
})

export const pageTransition = (path) => {
	return (dispatch) => {
		dispatch(push(path))
	}
}

export const commentViewDisplay = () => {
	if (!localStorage.getItem('auth_token')) {
		return (dispatch) => {
			dispatch(changeFlagList('pleaseLoginFlag', true))
		}
	} else {
		return (dispatch) => {
			dispatch(changeFlagList('openSendCommentViewFlag', true))
		}
	}
}


export const fetchComment = (id) => {
	return (dispatch) => {
		dispatch(changeFlagList("loadCommentFlag", true))
		
		axios.get("http://localhost:3000/worry/" + id).then((response) => {
			dispatch(successCommentFetch(response.data))
		}).catch((err) => {
			dispatch(changeFlagList("connectServerFailureFlag", true))
		})
	}
}

export const submitComment = (value, worryId) => {
	return (dispatch) => {
		dispatch(changeFlagList("submitLoadFlag", true))
		
		let data = {
		  worry_comment: {
		  	comment: value,
			  worry_id: worryId
		  },
			auth_token: localStorage.getItem('auth_token')
		}
		
		axios.post("http://localhost:3000/worry_comment", data).then((response) => {
			dispatch(successSubmit(response.data))
			let sleep = msec => new Promise(resolve => setTimeout(resolve, msec))
			async function oneSecWait() {
				await sleep(500)
				dispatch(changeFlagList("openSendCommentViewFlag", false))
				dispatch(fetchComment(worryId))
			}
			oneSecWait()
		}).catch((err) => {
			dispatch(changeFlagList("connectServerFailureFlag", true))
		})
	}
}