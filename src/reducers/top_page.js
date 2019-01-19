import {sendWorrySuccess} from "../actions/top_page";

const initialState = {
	formData: {
		heartUpViewFlag: false,
		inputWorryTitleValue: "",
		waitOfSubmit: false,
		pleaseLoginFlag: false,
		sendWorrySuccess: false,
		sendWorryFailure: false
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
		case "SEND_WORRY_SUCCESS_START":
			return {
				...state,
				formData: {
					...state.formData,
					sendWorrySuccess: true,
					waitOfSubmit: false
				}
			}
		case "FINISH_WORRY_SENDING":
			return {
				...state,
				formData: {
					...state.formData,
					heartUpViewFlag: false,
					inputWorryTitleValue: ""
				}
			}
		case "SEND_WORRY_FAILURE":
			return {
				...state,
				formData: {
					...state.formData,
					sendWorryFailure: true
				}
			}
		
		default:
			return state
	}
}