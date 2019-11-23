import {FETCH_USERS, DELETE_USER} from './types';

export const fetchUsers = () => dispatch => {
	fetch('https://jsonplaceholder.typicode.com/users')
	.then(res => res.json())
	.then(data => {
		console.log('fetchUsers: ');
		console.log(data);
		dispatch({type: FETCH_USERS, payload: data})
	})
}

export const deleteUser = (id) => dispatch => {
	fetch('https://jsonplaceholder.typicode.com/posts/1', {
	  method: 'DELETE'
	}).then(res => res.json())
	.then(data => {
		console.log('deleteUser: ');
		console.log(data);
		dispatch({type: DELETE_USER, payload: id})
	})
}