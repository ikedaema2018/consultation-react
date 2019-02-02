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
	return {
		type: "LOGIN_ERROR",
		payload:{}
	}
}

export const toggleFlag = (flagName, bool) => ({
	type: "TOGGLE_FLAG",
	payload: {
		flagName: flagName,
		bool: bool
	}
})





export const loginAction = (info) => {
	return (dispatch) => {
		dispatch(loadLogin())
		
		let sleep = (msec) => new Promise(resolve => setTimeout(resolve, msec))
		async function oneSecWait() {
			await sleep(1200)
			dispatch(toggleFlag("loadFlag", false))
		}
		oneSecWait()
		
		axios.post(url, info)
			.then((res) => {
				localStorage.setItem('user_name', res.data.name)
				localStorage.setItem('auth_token', res.data.auth_token)
				dispatch(loginSuccess())
			})
			.catch((err) => {
				dispatch(loginError())
		})
	}
}

