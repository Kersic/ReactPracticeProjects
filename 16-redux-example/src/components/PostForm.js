import React, {useState} from 'react';
import { connect } from "react-redux";
import PropTypes from 'prop-types';
import { createPost } from "../actions/postActions";

PostFrom.propTypes = {
	fetchPosts: PropTypes.func.isRequired,
}

function PostFrom ({createPost}) {

	const [body, setBody] = useState("");
	const [title, setTitle] = useState("");

	const handleSubmit = (evt) => {
		evt.preventDefault();

		const post = {
			title: title,
			body: body,
		}

		createPost(post);
	}

	return (
		<div>
			<form onSubmit={handleSubmit}>
				<h2>Posts</h2>
				<hr/>
				<label>New Post title:</label>
				<input onChange={(evt) => setTitle(evt.target.value)} value={title} />
				<br/>
				<label>New Post text:</label>
				<input onChange={(evt) => setBody(evt.target.value)} value={body} />
				<br/>
				<button>Add</button>
			</form>
		</div>
	)
}

export default connect(null, {createPost})(PostFrom);