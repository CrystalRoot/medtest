import React, { Component } from 'react';
// import { Button, Form, FormGroup, Label, Input, Col, FormFeedback } from 'reactstrap';
// import { Link } from 'react-router-dom';
import '../App.css';

const RadioInput = ({label, value, checked, setter}) => {
	return (
        <label>
            <input type="radio" checked={checked == value}
                onChange={() => setter(value)} />
            <span>{label}</span>
        </label>
	);
};

const Form = props => {
	const [dose1, setDose1] = React.useState();
	const [dose2, setDose2] = React.useState();
	const handleSubmit = e => {
		e.preventDefault();
		const data = {dose1, dose2};
		const json = JSON.stringify(data, null, 4);
		console.clear();
		console.log(json);
        alert(json);
	};
	return (
        <form onSubmit={handleSubmit}>
            <div>
                <label>Dose 1:</label>
                <RadioInput label="2.5 mg" value="2.5 mg" checked={dose1} setter={setDose1}  />
                <RadioInput label="5 mg" value="5 mg" checked={dose1} setter={setDose1} />
            </div>
            <div>
                <label>Dose 2:</label>
                <RadioInput label="2.5 mg" value="2.5 mg" checked={dose2} setter={setDose2} />
                <RadioInput label="5 mg" value="5 mg" checked={dose2} setter={setDose2}  />
            </div>
            <button type="submit">Submit</button>
        </form>
	);
};

// class FormComponent extends Component {
//     constructor(props) {
//         super(props);

//         this.state = {
//             dose1: '',
//             dose2: ''
//         };

//         this.handleInputChange = this.handleInputChange.bind(this);
//         this.handleSubmit = this.handleSubmit.bind(this);
//     }

//     handleInputChange(event) {
//         const target = event.target;
//         const value = target.type === 'radio' ? target.checked : target.value;
//         const name = target.name;

//         this.setState({
//             [name]: value
//         });
//     }

//     handleSubmit(values) {
//         alert('Current state is: ' + JSON.stringify(this.state));
//     }

//     render() {

//         return (
//             <div className="container">
//                 <h5>Today's Doses</h5>
//                 <Form onSubmit={values => this.handleSubmit}>
//                     <div className="radio">
//                         <div className="row">Dose 1:
//                         <Label>
//                             <Input 
//                                 type="radio"
//                                 name="dose1"
//                                 value="2.5mg"
//                                 onChange={this.handleInputChange}> 2.5 mg
//                             </Input>
//                         </Label>
//                         <Label>
//                             <Input 
//                                 type="radio"
//                                 name="dose1"
//                                 value="5 mg"
//                                 onChange={this.handleInputChange}> 5 mg
//                             </Input>
//                         </Label>
//                     </div>
//                     </div>
//                     <div className="row">
//                         <Label htmlFor="dose1">Dose 2:</Label>
//                             <Input type="radio" value="2.5 mg" onChange={this.handleInputChange} name="dose2" /> 2.5 mg
//                             <Input type="radio" value="5 mg" onChange={this.handleInputChange} name="dose2" />5 mg
//                     </div>

//                             <Input type="submit" value="Submit" />
//                 </Form>
//             </div>
//         );
//     }
// }

export default Form;