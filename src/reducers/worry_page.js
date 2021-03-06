const initialState = {
	flagList: {
		loadCommentFlag: false,
		openSendCommentViewFlag: false,
		commentSubmitSuccessFlag: false,
		connectServerFailureFlag: false,
		submitLoadFlag: false,
		pleaseLoginFlag: false
	},
	worryData: {
		worry: {},
		worryUser: {},
		worryComments: [],
		worryCommentUsers: []
	},
	commentManagement: {
		commentValue: "",
		commentMessage: []
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
		case "CHANGE_COMMENT_VALUE":
			return {
				...state,
				commentManagement: {
					...state.commentManagement,
					commentValue: action.payload.value
				}
			}
		case "SUCCESS_WORRY_COMMENT_SUBMIT":
			return {
				...state,
				commentManagement: {
					...state.commentManagement,
					commentValue: ""
				},
				flagList: {
					...state.flagList,
					submitLoadFlag: false,
					commentSubmitSuccessFlag: true,
				}
			}
		case "RESET_STATE_WORRY_PAGE":
			return initialState
			
		default:
			return state
	}
}