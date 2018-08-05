import React, {Component} from 'react';
import * as counterActions from '../store/modules/counter';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import Counter from '../components/Counter';

class CounterContainer extends Component{
	onIncrement = () => {
		const {CounterActions} = this.props;
		CounterActions.increase();
	}

	onDecrement = () => {
		const {CounterActions} = this.props;
		CounterActions.decrease();
	}

	render(){
		const {number} = this.props;
		const {onIncrement, onDecrement} = this;

		return (
			<Counter number={number} onIncrement={onIncrement} onDecrement={onDecrement} />
		);
	}
}

export default connect(
	({counter}) => ({
		number: counter.number
	}),
	dispatch => ({
		CounterActions: bindActionCreators(counterActions, dispatch)
	})
)(CounterContainer);
