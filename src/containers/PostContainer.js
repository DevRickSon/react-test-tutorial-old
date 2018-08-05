import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as postActions from '../store/modules/post';
import Post from '../components/Post';

class PostContainer extends Component{
	loadData = async () => {
		const {PostActions} = this.props;

		try{
			await PostActions.getPost(1);
		}catch(e){
			console.log(e);
		}
	}

	render(){
		const {title, body} = this.props;
		const {loadData} = this;

		return (
			<Post title={title} body={body} onLoad={loadData} />
		);
	}
}

export default connect(
	({post}) => ({
		loading: post.pending,
		error: post.rejected,
		title: post.title,
		body: post.body
	}),
	dispatch => ({
		PostActions: bindActionCreators(postActions, dispatch)
	})
)(PostContainer);

