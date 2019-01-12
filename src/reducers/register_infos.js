import axios from 'axios'
axios.defaults.headers.post["Contents-Type"] = "application/x-www-form-urlencoded"

const obj = {
	data: { name: '', email: '', password: '', password_confirmation: '', gender: '男', age: '', introduction: '' },
	message: {email: ["メールアドレスの入力は必須です"], name: ["名前の入力は必須です"],
		password: ["passwordの入力は必須です"], password_confirmation: ["１つ目と同じpasswordを入力してください"], age: ['年齢を選択してください'], introduction: []},
	sendFlag: false, registerModalFlag: false,
	registerModalStatus: {
		isLoading: false,
		isSuccess: false,
		errorMessage: ""
	}
}

const initialState = Object.freeze(obj)


export const registerInfosReducer = (state = initialState, action) => {
	switch (action.type) {
		
		case 'INPUT_INFO':
			return {
				...state,
				message: {
					...checkValue(action.payload.info, state)
				},
				
				data: {
					...state.data,
					[action.payload.info.name]:  action.payload.info.value
				},
				sendFlag: errorCheck(state.message)
			}
		case 'LOAD_SEND':
			return {
				...state,
				registerModalFlag: true,
				registerModalStatus: {
					isLoading: action.isLoading
				}
			}
		case 'SEND_SUCCESS':
			if (action.isSuccess){
				return {
					...initialState,
					registerModalFlag: true,
					registerModalStatus: {
						isLoading: false,
						isSuccess: true
					}
				}
			} else {
				return {
					...state,
					registerModalFlag: true,
					registerModalStatus: {
						isLoading: false,
						isSuccess: false,
						errorMessage: action.errorMessage
					}
				}
			}
			
		case 'RESET_STATE':
			return {
				...initialState
			}
			
		default:
			console.log(`${action.type}は許容されていないアクションです`)
			return state
	}
}

function checkValue(info, state){
	state.message[info.name] = []
	switch (info.name) {
		case 'name':
			if(info.value.length > 10) {
				state.message.name.push("名前は10文字以内で入力してください")
			}
			if(info.value.length === 0) {
				state.message.name.push("名前の入力は必須です")
			}
		case "email":
			
			//呪文
			var regexp = /^[A-Za-z0-9]{1}[A-Za-z0-9_.-]*@{1}[A-Za-z0-9_.-]{1,}\.[A-Za-z0-9]{1,}$/;
			
			if(info.value.length === 0) {
				state.message.email.push("メールアドレスの入力は必須です")
			}
			if(!regexp.test(info.value)) {
				state.message.email.push("正しいメールアドレスを入力してください")
			}
			break
		case "password":
			
			if(info.value.length === 0) {
				state.message.password.push("パスワードの入力は必須です")
			}
			
			if(info.value.length > 6) {
				state.message.password.push("パスワードは6文字以上にしてください")
			}
			
			if (!info.value.match(/[a-z]/) || !info.value.match(/[A-Z]/)) {
				state.message.password.push("大文字と小文字のアルファベット一文字以上づつ含んでください")
			}
			if(info.value !== state.data.password_confirmation) {
				state.message.password_confirmation.push("１つ目と同じパスワードを入力してください")
			}else{
				state.message.password_confirmation = state.message.password_confirmation.filter(val => val !== "１つ目と同じパスワードを入力してください")
			}
			break
		case "password_confirmation":
			
			if(info.value !== state.data.password) {
				state.message.password_confirmation.push("１つ目と同じパスワードを入力してください")
			}
			break
		
		case "gender":
			break
		
		case "age":
			if(!info.value) {
				state.message.age.push("年齢を選択してください")
			}
			break
		
		case "introduction":
			
			if(info.value.length >= 100) {
				state.message.introduction.push("自己紹介は100文字以内で入力してください")
			}
			break
		
		default:
			console.log(`${info.name}は許容されていない名前です`)
			break
	}
	
	return state.message
}


function errorCheck(mes) {
	for (let key in mes) {
		if (mes[key].length !== 0) {
			return false
		}
	}
	return true
}