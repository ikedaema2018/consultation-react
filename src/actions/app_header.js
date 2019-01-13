import { routerActions, push, replace } from 'react-router-redux'

export const toggleDrawer = (flagName, bool) => {
	return {
		type: "TOGGLE_DRAWER",
		payload: {
			flagName: flagName,
			bool: bool
		}
	}
}

export const pageTransition = (path) => {
	console.log(23233443343443344434343)
	return async (dispatch) => {
		dispatch(push(path))
	}
}
