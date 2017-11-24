import React, { Component } from 'react';
import { average } from '../lib/average';
// import { max } from './max';
// import { min } from './min';
// import { sum } from './sum';

export default class App extends Component {

	constructor(props) {
		super(props);

		this.state = {
			result: 0,
		};

		this.getAverage = this.getAverage.bind(this);
	}

	getAverage() {
		const num1 = parseInt(this.input1.value, 10);
		const num2 = parseInt(this.input2.value, 10);

		this.setState({
			result: average([num1, num2]),
		});
	}

	render() {
		const { result } = this.state;

        return (
            <div>
                <input ref={(ref) => {if (ref) this.input1 = ref;}} type="text" />
                <input ref={(ref) => {if (ref) this.input2 = ref;}} type="text" />
                <button type="button" onClick={this.getAverage}>
                	Get Average
                </button>
                {result !== 0 && <h2>{result}</h2>}
            </div>      
        );
    }
}