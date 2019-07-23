import  React, { Component } from 'react';
import { connect } from 'react-redux';
import {additem,togglestatus} from '../actions';
import styled, { css } from 'styled-components';

//media templates

const sizes = {
    desktop: 992,
    tablet: 768,
    phone: 576,
}

const media = Object.keys(sizes).reduce((acc,label) => {
    acc[label] = (...args) => 
    css`@media (max-width:${sizes[label]}px){
        ${css(...args)}

    }`

    return acc

    
},{})



const StrikeWrap = styled.div`
    text-decoration: ${props => props.strike === 'strike' ? 'line-through':null};
    padding:10px 15px;
    background: ${props => props.primary ? 'green':'white'}
   
    border-radius:5px;
    ${media.desktop`background:green;`}
    &:hover{
        cursor:pointer;

    }
    

`;



export const Item = (props)=>{

    const toggledStatus = (item)=> {
       let itemId = item.id;
        props.togglestatus(
            itemId
        )
        console.log('fire toggle')
        
    }
        
    
    
    return(
    <StrikeWrap  primary onClick={()=>toggledStatus(props.item)}  strike={`${props.item.completed ? 'strike':null}`}>
        <h2 className='task-name'>{props.item.value}</h2>
    </StrikeWrap>
    )
    
}