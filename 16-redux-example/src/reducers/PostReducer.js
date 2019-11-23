import { NEW_POST, FETCH_POSTS } from '../actions/types';

const initialState = {
	items: [],
}

export default function(state = initialState, action) {
	switch (action.type) {
		case FETCH_POSTS:
			return {
				...state,
				items: action.payload
			}
		case NEW_POST:
			return {
				...state,
				items: [action.payload, ...state.items]
			}
		default:
      return state
	}
}