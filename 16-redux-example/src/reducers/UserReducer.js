import { FETCH_USERS, DELETE_USER } from '../actions/types';

const initialState = {
	all: [],
}

export default function(state = initialState, action) {
	switch (action.type) {
		case FETCH_USERS:
			return {
				...state,
				all: action.payload
			}
		case DELETE_USER:
			return {
				...state,
				all: state.all.filter(user => user.id.toString() !== action.payload)
			}
		default:
      		return state;
	}
}
