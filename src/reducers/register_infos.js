const initialState = {
	data: { name: '', email: '', password: '', password_confirmation: '', gender: '', age: '', introduction: '' },
	message: {name: ["名前の入力は必須です"], email: ["メールアドレスの入力は必須です"],
	password: ["passwordの入力は必須です"], password_confirmation: ["１つ目と同じpasswordを入力してください"], age: ['年齢を選択してください'], introduction: []}
}

export default function registerInfosReducer(state = initialState, action) {
	switch (action.type) {
		
		case 'INPUT_INFO':
			return {
				...state,
				data: {
					[action.payload.info.name]: action.payload.info.value
				},
				message: {
					[action.payload.info.name]: checkValue(action.payload.info)
				}
			}
		default:
			console.log(`${action.type}は許容されていないアクションです`)
			return state
	}
}

function checkValue(info){
	let message = []
	switch (info.name) {
		case 'name':
			if(info.value.length > 10) {
				message.push("名前は10文字以内で入力してください")
			}
			if(info.value.length === 0) {
				message.push("名前の入力は必須です")
			}
			break
		default:
			console.log(`${info.name}は許容されていない名前です`)
	}
	return message
}