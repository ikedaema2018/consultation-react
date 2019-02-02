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

export const resetState = () => ({
	type: "RESET_STATE_TOPPAGE",
	payload: {}
})

export const pageTransition = (path) => {
	return (dispatch) => {
		dispatch(push(path))
	}
}

export const sendWorrySuccess = () => ({
	type: "SEND_WORRY_SUCCESS_START",
	payload: {}
})

export const finishWorrySending = () => ({
	type: "FINISH_WORRY_SENDING",
	payload: {}
})

export const sendWorryFailure = () => ({
	type: "SEND_WORRY_FAILURE",
	payload: {}
})

export const updateWorryData = (data, err) => ({
	type: "UPDATE_WORRY_DATA",
	payload: {
		data: data,
		error: err
	}
})

export const changeWorryFlag = (flagName, bool) => ({
	type: "CHANGE_WORRY_FLAG",
	payload: {
		flagName: flagName,
		bool: bool
	}
})

export const changeSort = (sort) => ({
	type: "CHANGE_SORT_TYPE",
	payload: {
		sortValue: sort.value
	}
})


export const receiveWorryData = () => {
	return (dispatch) => {
		dispatch(changeWorryFlag("worryLoadFlag", true))
		axios.get("http://localhost:3000/worry")
			.then(res => {
				dispatch(updateWorryData(res.data), null)
			})
			.catch(err => {
				console.log(err)
			})
	}
}



export const inputWorryValueSubmit = (value) => {
	
	let data = {worry : {worry: value}, auth_token: localStorage.getItem("auth_token")}
	
	return (dispatch) => {
		dispatch(changeWorryFlag("waitOfSubmit", true))
		axios.post("http://localhost:3000/worry", data)
			.then((res) => {
			//悩みの投稿に成功しました
			dispatch(sendWorrySuccess())
				const sleep = msec => new Promise(resolve => setTimeout(resolve, msec))
				async function oneSecWait() {
					await sleep(1000);
					dispatch(finishWorrySending())
				}
				oneSecWait()
				dispatch(receiveWorryData())
		})
			.catch((err) => {
			dispatch(sendWorryFailure())
		})
	}
}