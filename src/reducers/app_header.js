const initialState = {
	profileFlag: false
}

export const appHeaderReducer = (state = initialState, action) => {
	switch (action.type) {
		case "TOGGLE_DRAWER":
			return {
				...state,
				[action.payload.flagName]: action.payload.bool
			}
		default:
			return state
	}
}