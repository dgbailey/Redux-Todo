import  React, { Component } from 'react';
import { connect } from 'react-redux';
import {additem,toggleitem} from '../actions';
import styled, { css } from 'styled-components';

const StrikeWrap = styled.div`
    text-decoration: ${props => props.strike === 'strike' ? 'line-through':null};
    padding:10px 15px;
    border-radius:5px;
    &:hover{
        cursor:pointer;
        
    }

`

export const Item = (props)=>{

    let strikeWrapProp = props.item.completed ? null:'strike';
    
        return(
        <StrikeWrap strike={`${props.item.completed ? 'strike':null}`}>
            <h2 className='task-name'>{props.item.value}</h2>
        </StrikeWrap>
        )
    
}