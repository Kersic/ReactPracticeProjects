import React, {useEffect} from 'react';
import { connect } from "react-redux";
import { fetchUsers, deleteUser } from "../actions/userActions";

function mapStateToProps(state) {
  return {
    users: state.users.all
  };
}

function Users({users, fetchUsers, deleteUser}) {
	useEffect(() => {
		fetchUsers();
	}, []);

	const handleClick = (evt) => {
		deleteUser(evt.target.id);
	}

	return (
		<div>
		{users.map(user => 
			<div className="user" key={user.id}>
				<p>{user.name}</p>
				<button id={user.id} onClick={handleClick}>x</button>
			</div>
		)}
		</div>
	)
}

export default connect(mapStateToProps, {fetchUsers, deleteUser})(Users);