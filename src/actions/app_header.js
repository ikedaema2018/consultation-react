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
	return (dispatch) => {
		dispatch(push(path))
	}
}
