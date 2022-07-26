import React from "react";
import ReactDOM from "react-dom";
import Details from "./CardDetails";

import 'react-bootstrap'
import {Container ,Card, Col, Button} from 'react-bootstrap';
import './App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEye, faShareNodes, faEllipsis } from '@fortawesome/free-solid-svg-icons'  
import "./card.css"

const views = <FontAwesomeIcon icon={faEye} />
const share=<FontAwesomeIcon icon={faShareNodes}></FontAwesomeIcon>
const ellipsis=<FontAwesomeIcon icon={faEllipsis} />

function Crd(props){
    return(
        <div className="CrdContainer" key={props.id} >  
   <Container className='p-4' >  
  <Col md="4"></Col>
    <Card style={{ width: '50rem'}} bg="grey">
  <Card.Img variant="top" src={props.img} />
  <Card.Body style={{color:"black"}} >
  <Card.Text className="category">
    {props.emoji}{props.category}
    </Card.Text>
    <Card.Title variant="warning" className="mtitle">{props.title}<Button variant="light">{ellipsis}</Button></Card.Title>    
    <Card.Subtitle className="subtitle" >{props.subtitle}</Card.Subtitle>
    <div className="span">
    <t>{props.date}</t>{props.location}
    </div>
    <div className="button">
    <Button  variant="primary">{props.button}</Button>
    </div>
    <div className="mfooter">
    <img className="circle-img" src={props.humanImg}></img>{props.name}
    <t1>{views} 1.4k views <t2><button>{share}</button></t2></t1>
    </div>

    
    
    
  </Card.Body>
</Card>
</Container>
</div>
        
    )

};




{/* <div className="card">
            <h1 className="h1">{props.name}</h1>            
            <div className=".img" >
            <img className=".img" src={props.img} alt="avatar image"></img>
            </div>            
            <h2>{props.tel}</h2>
            <span>{props.emoji}{props.category}</span>
            <h2>{props.title}</h2>            
        </div> */}


export default Crd;