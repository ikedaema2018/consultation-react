import axios from 'axios'

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

export const submitComment = (value) => {

}