import React, {Component} from 'react';

class NameForm extends Component{
	static defaultProps = {
		input: '',
		onSubmit: () => console.warn('onInsert is not defined'),
		onChange: () => console.warn('onChange is not defined')
	}

	render(){
		const {input, onChange, onSubmit} = this.props;

		return (
			<form onSubmit={onSubmit}>
				<label>이름</label>
				<input type="text" value={input} onChange={onChange} />
				<button type="submit">등록</button>
			</form>
		);
	}
}

export default NameForm;