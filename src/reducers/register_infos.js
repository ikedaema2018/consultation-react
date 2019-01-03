const initialState = {
	data: { name: '', email: '', password: '', password_confirmation: '', gender: '', age: '', introduction: '' },
	message: {name: ["名前の入力は必須です"], email: ["メールアドレスの入力は必須です"],
	password: ["passwordの入力は必須です"], password_confirmation: ["１つ目と同じpasswordを入力してください"], age: ['年齢を選択してください'], introduction: []}
}

export default function registerInfosReducer(state = initialState, action) {
	switch (action.type) {
		case 'INPUT_INFO':
			console.log(action.payload.info.name)
			console.log(state.data.name)
			console.log(action.payload.info.value)
			return {
				...state,
				data: {
					[action.payload.info.name]: action.payload.info.value
				}
			}
		default:
			return state
	}
}
