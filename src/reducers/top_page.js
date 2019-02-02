
const sortDataEnum = {
	NEW: "new",
	OLD: "old"
}

const initialState = {
	formData: {
		heartUpViewFlag: false,
		inputWorryTitleValue: "",
		waitOfSubmit: false,
		pleaseLoginFlag: false,
		sendWorrySuccess: false,
		sendWorryFailure: false
	},
	worryData: {
		worryDataArray: [],
		worryLoadFlag: false
	},
	sortData: sortDataEnum.NEW
}

const sortData = (data) => {
	if (data.length <= 1) {
		return
	}
	
	data.sort((a, b) => {
		return b.id - a.id
	})
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
			
		case "UPDATE_WORRY_DATA":
			return {
				...state,
				worryData: {
					...state.worryData,
					worryDataArray: action.payload.data,
					worryLoadFlag: false
				}
			}
			
		case "CHANGE_WORRY_FLAG":
			return {
				...state,
				worryData: {
					...state.worryData,
					[action.payload.flagName]:  action.payload.bool
				}
			}
			
		case "RESET_STATE_TOPPAGE":
			return initialState
		
		case "CHANGE_SORT_TYPE":
			
			var worryData;
			
			if (state.worryData.worryDataArray <= 1) {
				return state
			}
			
			var worryData;
			
			switch (action.payload.sortValue) {
				case sortDataEnum.NEW:
					worryData = state.worryData.worryDataArray.slice().sort((a, b) => {
						return b.id - a.id
					})
					break
				case sortDataEnum.OLD:
					worryData = state.worryData.worryDataArray.slice().sort((a, b) => {
						return a.id - b.id
					})
					break
				default:
					worryData = state.worryData.worryDataArray
					break
			}
			
			return {
				...state,
				worryData: {
					...state.worryData,
					worryDataArray: worryData
				}
			}
			
		
		default:
			return state
	}
}