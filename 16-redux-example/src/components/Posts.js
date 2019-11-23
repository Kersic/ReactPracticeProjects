import React, {useEffect, useState} from 'react';
import PropTypes from 'prop-types';
import { connect } from "react-redux";
import { fetchPosts } from "../actions/postActions";

function mapStateToProps(state) {
  return {
    posts: state.posts.items // posts defined in rootReducer, items in postReducer
  };
}

Posts.propTypes = {
	fetchPosts: PropTypes.func.isRequired,
	posts: PropTypes.array.isRequired,
}

function Posts ({posts, fetchPosts}) {

	useEffect(() => {
		fetchPosts();
	}, []);

	const items = posts.map(post => (
		<div key={post.id}>
			<h4>{post.title}</h4>
			<p>{post.body}</p>
		</div>))

	return(
		<div>
			{items}
		</div>);
}

export default connect(mapStateToProps, {fetchPosts})(Posts);