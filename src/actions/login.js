import axios from 'axios'

const url = "https://localhost:3000"

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

export const loginAction = (info) => {
	return (dispatch) => {
		dispatch(loadLogin())
		console.log(info)
		
		// axios.post(url, data: )
	}
}

