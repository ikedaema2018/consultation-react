import axios from 'axios'
axios.defaults.headers.post["Contents-Type"] = "application/x-www-form-urlencoded"

const initialState = {
	data: { name: '', email: '', password: '', password_confirmation: '', gender: '男', age: '', introduction: '' },
	message: {name: ["名前の入力は必須です"], email: ["メールアドレスの入力は必須です"],
	password: ["passwordの入力は必須です"], password_confirmation: ["１つ目と同じpasswordを入力してください"], age: ['年齢を選択してください'], introduction: []},
	sendFlag: false,
	registerFlag: false
}

export const registerInfosReducer = (state = initialState, action) => {
	switch (action.type) {
		
		case 'INPUT_INFO':
			
			return {
				...state,
				message: checkValue(action.payload.info),
				
				data: {
					...initialState.data,
					[action.payload.info.name]: initialState.data[action.payload.info.name] = action.payload.info.value
				},
				sendFlag: errorCheck(initialState.message)
			}
		case 'SEND_INFO':
			let params = {
				user: {
					name: initialState.data.name,
					email: initialState.data.email,
					password: initialState.data.password,
					password_confirmation: initialState.data.password_confirmation,
					gender: initialState.data.gender,
					age: initialState.data.age,
					introduction: initialState.data.introduction
				}
			};
			
			sendData(params).then(() => {
				console.log("2")
				console.log(initialState)
				return {
					...initialState
				}
			}).catch(() => {
				return {
					...initialState
				}
			})
			console.log(3)
		default:
			console.log(`${action.type}は許容されていないアクションです`)
			return state
	}
}

function checkValue(info){
	initialState.message[info.name] = []
	switch (info.name) {
		case 'name':
			if(info.value.length > 10) {
				initialState.message.name.push("名前は10文字以内で入力してください")
			}
			if(info.value.length === 0) {
				initialState.message.name.push("名前の入力は必須です")
			}
			break
		case "email":
			
			//呪文
			var regexp = /^[A-Za-z0-9]{1}[A-Za-z0-9_.-]*@{1}[A-Za-z0-9_.-]{1,}\.[A-Za-z0-9]{1,}$/;
			
			if(info.value.length === 0) {
				initialState.message.email.push("メールアドレスの入力は必須です")
			}
			if(!regexp.test(info.value)) {
				initialState.message.email.push("正しいメールアドレスを入力してください")
			}
			break
		case "password":
			
			if(info.value.length === 0) {
				initialState.message.password.push("パスワードの入力は必須です")
			}
			
			if(info.value.length > 6) {
				initialState.message.password.push("パスワードは6文字以上にしてください")
			}
			
			if (!info.value.match(/[a-z]/) || !info.value.match(/[A-Z]/)) {
				initialState.message.password.push("大文字と小文字のアルファベット一文字以上づつ含んでください")
			}
			if(info.value !== initialState.data.password_confirmation) {
				initialState.message.password_confirmation.push("１つ目と同じパスワードを入力してください")
			}else{
				initialState.message.password_confirmation = initialState.message.password_confirmation.filter(val => val !== "１つ目と同じパスワードを入力してください")
			}
			break
		case "password_confirmation":
			console.log(initialState.data.password)
			
			if(info.value !== initialState.data.password) {
				initialState.message.password_confirmation.push("１つ目と同じパスワードを入力してください")
			}
			break
		
		case "gender":
			break
		
		case "age":
			if(!info.value) {
				initialState.message.age.push("年齢を選択してください")
			}
			break
		
		case "introduction":
			
			if(info.value.length >= 100) {
				initialState.message.introduction.push("自己紹介は100文字以内で入力してください")
			}
			break
		
		default:
			console.log(`${info.name}は許容されていない名前です`)
			break
	}
	
	return initialState.message
}

function sendData(params) {
	
	return new Promise((resolve, reject) => (
		axios.post('http://localhost:3000/users', params)
			.then((result) => {
				initialState.data = {name: '', email: '', password: '', password_confirmation: '', gender: '男', age: '', introduction: ''}
				initialState.message = {name: ["名前の入力は必須です"], email: ["メールアドレスの入力は必須です"],
					password: ["passwordの入力は必須です"], password_confirmation: ["１つ目と同じpasswordを入力してください"], age: ["年齢を選択してください"], introduction: []}
				initialState.registerFlag = true
				console.log(1)
				return resolve(1)
				
			})
			.catch((error) => {
				if (error.response) {
					if (error.response.data.error) {
						console.log(error.response.data.error)
						if (error.response.data.error === "RecordNotUnique") {
							// alert("ユーザー登録に失敗しました。すでに使用されているメールアドレスは使用できません")
							initialState.message.email.push("同じメールアドレスで登録することはできません")
						}
					}
				}
				return reject(2)
			})
	))
	
}

function errorCheck(mes) {
	for (let key in mes) {
		if (mes[key].length !== 0) {
			return false
		}
	}
	return true
}