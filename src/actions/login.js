import axios from 'axios'

const url = "http://localhost:3000/admin_users"

export const inputLoginForm = (info) => ({
	type: "INPUT_LOGIN",
	payload: {
		info
	}
})

export const loadLogin = () => ({
	type: "LOAD_LOGIN",
	payload: {}
})

export const loginSuccess = () => ({
	type: "LOGIN_SUCCESS",
	payload: {}
})

export const loginError = () => {
	console.log("dawdwadaddwwadadwawdaw")
	return {
		type: "LOGIN_ERROR",
		payload:{}
	}
}

export const onModalOut = () => {
	console.log("onModalOut")
	return {
		type: "MODAL_CLOSE",
		payload: {}
	}
}



export const loginAction = (info) => {
	return (dispatch) => {
		dispatch(loadLogin())
		
		axios.post(url, info)
			.then((res) => {
				document.cookie = `auth_token=${res.data.auth_token}`
				dispatch(loginSuccess())
			})
			.catch((err) => {
				dispatch(loginError())
		})
	}
}

