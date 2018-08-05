import React, { Component } from 'react';
import CounterContainer from './containers/CounterContainer';
import NameContainer from './containers/NameContainer';
import PostContainer from './containers/PostContainer';

class App extends Component {
	render() {
		return (
			<div>
				<CounterContainer />
				<hr />
				<h1>이름목록</h1>
				<NameContainer />
				<hr />
				<PostContainer />
			</div>
		);
	}
}

export default App;
