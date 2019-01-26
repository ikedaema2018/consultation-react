const initialState = {
	flagList: {
		loadCommentFlag: false,
	},
	worryData: {
		worry: {},
		worryUser: {},
		worryComments: [],
		worryCommentUsers: []
	}
}

export const worryPageReducer = (state = initialState, action) => {
	switch (action.type) {
		case "CHANGE_FLAG_LIST":
			return {
				...state,
				flagList: {
					...state.flagList,
					[action.payload.flagName]: action.payload.bool
				}
			}
		case "SUCCESS_COMMENT_FETCH":
			return {
				...state,
				flagList: {
					...state.flagList,
					loadCommentFlag: false
				},
				worryData: {
					...state.worryData,
					worry: action.payload.value.worry,
					worryUser: action.payload.value.worry_user,
					worryComments: action.payload.value.worry_comments,
					worryCommentUsers: action.payload.value.worry_comment_users
				}
			}
		default:
			return state
	}
}