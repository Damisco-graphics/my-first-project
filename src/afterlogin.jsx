import React from 'react';
import ReactDOM from 'react-dom'

import 'react-bootstrap';
import {Button} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import { NavigationBarItem } from 'typescript';
import './body.css';
import './card.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { faLocationDot,faPencil,faCircleExclamation, faThumbsUp } from '@fortawesome/free-solid-svg-icons'  
import "./card.css";



const location = <FontAwesomeIcon icon={faLocationDot} />
const pencil=<FontAwesomeIcon icon={faPencil} />
const warning=<FontAwesomeIcon icon={faCircleExclamation}/>
const like=<FontAwesomeIcon icon={faThumbsUp}/>


const afterlogin= ()=>{
    return(
        <div className="afterloginCard">
        <div className='Noida' >

            <t3>{location} Noida, India      </t3>  {pencil}
            </div>
            <t4>{warning}    Your location will help us serve better and extend a personalised experience.</t4> 
            <t5>{like} RECOMMENDED GROUPS</t5>
            <div className='aRecommendedGroups'>
            <img className='acircle-img' src="https://static.scientificamerican.com/sciam/cache/file/A77DFDA8-AC26-437C-89EE952536452F3D_source.jpg?w=590&h=800&3A03143B-80C0-4682-BC1170570B5C7389"></img>
            <Button className='abutton' style={{display: 'flex'}} variant='light' >follow</Button>
            </div>
            <div className='aRecommendedGroups'>
            <img className='acircle-img' src="https://static.scientificamerican.com/sciam/cache/file/A77DFDA8-AC26-437C-89EE952536452F3D_source.jpg?w=590&h=800&3A03143B-80C0-4682-BC1170570B5C7389"></img>
            <Button className='abutton' style={{display: 'flex'}} variant='light' >follow</Button>
            </div>
            <div className='aRecommendedGroups'>
            <img className='acircle-img' src="https://static.scientificamerican.com/sciam/cache/file/A77DFDA8-AC26-437C-89EE952536452F3D_source.jpg?w=590&h=800&3A03143B-80C0-4682-BC1170570B5C7389"></img>
            <Button className='abutton' style={{display: 'flex'}} variant='light' >follow</Button>
            </div>
        </div>
    )

};





export default afterlogin
