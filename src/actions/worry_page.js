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


export const fetchComment = (id) => {
	return (dispatch) => {
		dispatch(changeFlagList("loadCommentFlag", true))
		
		axios.get("http://localhost:3000/worry/" + id).then((response) => {
			console.log(response)
			dispatch(successCommentFetch(response.data))
		}).catch((err) => {
			console.log(err)
		})
	}
}