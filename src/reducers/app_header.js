const initialState = {
	profileFlag: false,
	logoutFlag: false
}

export const appHeaderReducer = (state = initialState, action) => {
	switch (action.type) {
		case "TOGGLE_DRAWER":
			return {
				...state,
				[action.payload.flagName]: action.payload.bool
			}
		case "LOGOUT":
			return {
				...state,
				logoutFlag: true,
				profileFlag: false
			}
		default:
			return state
	}
}