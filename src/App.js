import React, { Component } from 'react';
import { Navbar, NavbarBrand } from 'reactstrap';
import FormComponent from '../src/components/FormComponent';
import './App.css';

class App extends Component {
    render() {
        return (
            <div className="App">
                <Navbar dark color="primary">
                <div className="container">
                    <NavbarBrand href="/">Is My New Medication Working?</NavbarBrand>
                </div>
                </Navbar>
                <FormComponent />
            </div>
        );
    }
}

export default App;