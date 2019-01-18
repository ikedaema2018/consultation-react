import axios from 'axios'
import { push } from 'react-router-redux'

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

export const disPlayPostView = () => {
	if (!localStorage.getItem('auth_token')) {
		return (dispatch) => {
			dispatch(changeFlag("pleaseLoginFlag", true))
		}
	}
	return {
		type: "CHANGE_FORM_FLAG",
		payload: {
			flagName: "heartUpViewFlag",
			bool: true
		}
	}
}

export const pageTransition = (path) => {
	return (dispatch) => {
		dispatch(push(path))
	}
}



export const inputWorryValueSubmit = (value) => {
	// ログイン認証できてなかったら終わり
	// if (!localStorage.getItem('auth_token')) {
	// 	return (dispatch) => {
	// 		dispatch(changeFlag("pleaseLoginFlag", true))
	// 	}
	// }
	
	let data = {worry : {worry: value}, auth_token: localStorage.getItem("auth_token")}
	
	return (dispatch) => {
		dispatch(changeFlag("waitOfSubmit", true))
		axios.post("http://localhost:3000/worry", data).then((res) => {
			console.log(res)
		}).catch((err) => {
			console.log(err)
		})
	}
}