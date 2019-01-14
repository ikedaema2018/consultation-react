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

export const logoutAction = () => {
	localStorage.removeItem('auth_token')
	localStorage.removeItem('user_name')
	
	return {
		type: "LOGOUT",
		payload: {}
	}
}
