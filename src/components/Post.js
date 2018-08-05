import React, {Fragment} from 'react';

const Post = ({title, body, onLoad}) => {
	return (
		<Fragment>
			<h2>{title}</h2>
			<div>{body}</div>
			<button onClick={onLoad}>LoadMe</button>
		</Fragment>
	);
}

Post.defaultProps = {
	title: 'Hello',
	body: 'World!!',
	onLoad: () => console.warn('onLoad is not defined')
};

export default Post;