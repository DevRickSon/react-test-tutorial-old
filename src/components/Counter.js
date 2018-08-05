import React, {Component} from 'react';

class Counter extends Component{
    static defaultProps = {
        number: 0,
        onIncrement: () => console.warn('onIncrement is not defined'),
        onDecrement: () => console.warn('onDecrement is not defined')
    };

    render(){
        const {number, onIncrement, onDecrement} = this.props;

        return (
            <div>
                <h1>카운터</h1>
                <h2>{number}</h2>
                <button onClick={onIncrement}>+</button>
                <button onClick={onDecrement}>-</button>
            </div>
        );
    }
}

export default Counter;