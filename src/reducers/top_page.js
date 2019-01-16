const initialState = {
	formData: {
		heartUpViewFlag: false,
		inputWorryTitleValue: "",
		waitOfSubmit: false,
		pleaseLoginFlag: false
	}
}

export const topPageReducer = (state = initialState, action) => {
	switch (action.type) {
		case "CHANGE_FORM_FLAG":
			return {
				...state,
				formData: {
					...state.formData,
					[action.payload.flagName]: action.payload.bool
				}
			}
			
		case "CHANGE_INPUT_WORRY_TITLE":
			return {
				...state,
				formData: {
					...state.formData,
					inputWorryTitleValue: action.payload.inputWorryTitle.value
				}
			}
		
		default:
			return state
	}
}