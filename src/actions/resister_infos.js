import axios from "axios";

export const inputRegisterInfo = (info) => ({
	type: 'INPUT_INFO',
	payload: {
		info
	}
})

export const loadSending = (status) => ({
	type: 'LOAD_SEND',
	isLoading: status
})

export const sendIsSuccess = (isSuccess, errorMessage = "ユーザー情報の登録に失敗しました") => ({
	type: 'SEND_SUCCESS',
  isSuccess: isSuccess,
	errorMessage: errorMessage
})

export const resetState = () => ({
	type: 'RESET_STATE',
	payload: {}
})


//
// export function sendRegisterInfo(userInfo) {
// 	console.log(userInfo)
// }




export const sendRegisterInfo = (userInfo) => {
	return (dispatch) => {
		dispatch(loadSending(true))
		let params = {
			user : userInfo
		}
		
		axios.post('http://localhost:3000/users', params)
			.then((result) => {
				dispatch(sendIsSuccess(true))
			})
			.catch((error) => {
				var errorMessage = "";
				if (error.response) {
					if (error.response.data.error) {
						console.log(error.response.data.error)
						if (error.response.data.error === "RecordNotUnique") {
							errorMessage = "ユーザー登録に失敗しました。すでに使用されているメールアドレスは使用できません"
						}
					}
				}
				errorMessage == "" ? errorMessage = "ユーザー情報の登録に失敗しました" : errorMessage = errorMessage
				dispatch(sendIsSuccess(false, errorMessage))
			})
	}
}
