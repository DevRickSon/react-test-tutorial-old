import React, {Component, Fragment} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import NameForm from '../components/NameForm';
import NameList from '../components/NameList';
import * as namesActions from '../store/modules/names';

class NameContainer extends Component{
	onChange = e => {
		const {NamesActions} = this.props;
		NamesActions.changeInput(e.target.value);
	}

	onSubmit = e => {
		const {input, NamesActions} = this.props;
		NamesActions.insert(input);
		NamesActions.changeInput('');
		e.preventDefault();
	}


	render(){
		const {input, names} = this.props;
		const {onChange, onSubmit} = this;

		return (
			<Fragment>
				<NameForm input={input} onChange={onChange} onSubmit={onSubmit} />
				<NameList names={names} />
			</Fragment>
		);
	}
}

export default connect(
	({names}) => ({
		input: names.input,
		names: names.names
	}),
	dispatch => ({
		NamesActions: bindActionCreators(namesActions, dispatch)
	})
)(NameContainer);