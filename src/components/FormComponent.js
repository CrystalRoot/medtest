import React, { Component } from 'react';
import { Button, Label, Col, Row, Form, FormGroup, Input } from 'reactstrap';
import '../App.css';

class FormComponent extends Component {
    constructor(props) {
        super(props);

        this.state = {value: ''};

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({value: event.target.value});
    }

    handleSubmit(event) {
        alert('Current state is: ' + this.state.value);
        event.preventDefault();
    }

    render() {

        return (
            <Form onSubmit={this.handleSubmit}>
                <Label htmlFor="dose1">Dose 1:</Label>
                    <Input type="radio" value="2.5 mg" onChange={this.handleChange} name="dose1" /> 2.5 mg
                    <Input type="radio" value="5 mg" onChange={this.handleChange} name="dose1" />5 mg
                    <Input type="submit" value="Submit" />
            </Form>
        );
    }
}

export default FormComponent;