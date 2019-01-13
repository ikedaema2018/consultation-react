const initialState = {
	data: {
		email: "",
		password: ""
	},
	message: {
		email: ["メールアドレスを入力してください"],
		password: ["パスワードを入力してください"]
	},
	loadFlag: false,
	loginFlag: false
}

export const loginReducer = (state = initialState, action) => {
	switch (action.type) {
		case "INPUT_LOGIN":
			return {
				...state,
				
				data: {
					...state.data,
					[action.payload.info.name]: action.payload.info.value
				},
				message: {
					...checkValue(action, state)
				}
			}
		case "LOAD_LOGIN":
			return {
				...state,
				loadFlag: true
			}
			
		case "LOGIN_SUCCESS":
			return {
				...state,
				loadFlag: true,
				loginFlag: true
			}
			
		case "LOGIN_ERROR":
			return {
				...state,
				loadFlag: true,
				loginFlag: false
			}
			
		case "MODAL_CLOSE":
			console.log("wadawdawdawdwadawdawdawdadwadw")
			return {
				...state,
				loadFlag: false
			}
			
		default:
			return state
	}
}

function checkValue(action, state) {
	if (action.payload.info.name == "email") {
		state.message.email = []
		if (action.payload.info.value == '') {
			state.message.email.push("メールアドレスを入力してください")
		}
		
		let regexp = /^[A-Za-z0-9]{1}[A-Za-z0-9_.-]*@{1}[A-Za-z0-9_.-]{1,}\.[A-Za-z0-9]{1,}$/;
		if(!regexp.test(action.payload.info.value)) {
			state.message.email.push("正しいメールアドレスを入力してください")
		}
	} else if (action.payload.info.name == "password") {
		
		state.message.password = []
		if (action.payload.info.value == "") {
			state.message.password.push("パスワードを入力してください")
		}
		
		if (!action.payload.info.value.match(/[a-z]/) || !action.payload.info.value.match(/[A-Z]/)) {
			state.message.password.push("大文字と小文字を組み合わせたパスワードを入力してください")
		}
	}
	return state.message
}