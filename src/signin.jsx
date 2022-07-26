import React from 'react';
import 'reactjs-popup';

import 'reactjs-popup/dist/index.css';
import { Nav, Navbar, NavItem,NavLink,Form, FormGroup, FormControl } from 'react-bootstrap';
// import 'react-bootstrap'
// import 'bootstrap/dist/css/bootstrap.min.css';
import './body.css';


function Signin(){
    return(
        <FormGroup>
            <Form className='d-flex'>
            <FormControl 
            type='input'
            placeholder='E-mail'
            aria-placeholder='Hello'
            className="me-2"
          aria-label="Search"
          label="Email"
            />
               </Form>
        </FormGroup>
    )
}


export default Signin