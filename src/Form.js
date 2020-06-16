
import React, { Component } from 'react';
import { Button } from './Button';

export class Form extends Component {

    constructor(props) {
        super(props);
        this.state = {
            number: 0
        };

        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        this.setState({ number: parseInt(event.target.value) });
    }

    render() {
        return (
            <div>
                <div className="lableForm">
                    <label>Input Number</label>
                </div>
                <div >
                    <input className="inputForm" type="text" value={this.state.number} onChange={this.handleChange} />
                </div>
                <Button onClick={() => this.props.onClick(this.state.number)} label="submit"></Button>
            </div>
        );
    }
}