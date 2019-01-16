import axios from 'axios'

export const changeFlag = (flagName, bool) => ({
	type: "CHANGE_FORM_FLAG",
	payload: {
		flagName: flagName,
		bool: bool
	}
})

export const changeInputWorryTitleValue = (t) => ({
	type: "CHANGE_INPUT_WORRY_TITLE",
	payload: {
		inputWorryTitle: t
	}
})

export const inputWorryValueSubmit = (value) => {
	// ログイン認証できてなかったら終わり
	if (!localStorage.getItem('auth_token')) {
		return (dispatch) => {
			dispatch(changeFlag("pleaseLoginFlag", true))
		}
	}
	
	return (dispatch) => {
		dispatch(changeFlag("waitOfSubmit", true))
		axios.post("http://localhost:3000/worry", {worry: value, user_id: localStorage.getItem("auth_token")}).then((res) => {
			console.log(res)
		}).catch((err) => {
			console.log(err)
		})
	}
}