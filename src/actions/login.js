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

export const loginAction = (info) => {
	return (dispatch) => {
		dispatch(loadLogin())
		
		axios.post(url, info)
			.then((res) => {
				console.log(res)
			})
			.catch((err) => {
				console.log(err)
		})
	}
}

