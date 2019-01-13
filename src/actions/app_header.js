export const toggleDrawer = (flagName, bool) => {
	return {
		type: "TOGGLE_DRAWER",
		payload: {
			flagName: flagName,
			bool: bool
		}
	}
}