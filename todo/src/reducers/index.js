import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import {ADDITEM,TOGGLE} from '../actions';

const initial_state = {
    items:[{value:'Add item with button',completed:false}]
}

export default (state = initial_state,action) => {
    console.log('additem reducer fire')
    let pl = action.payload;
    console.log(pl,'payload')
    switch(action.type){
        
        case ADDITEM:
        return{
            items: [...state.items,
            pl]
            
        }
    
        case TOGGLE:
        return{
            items:action.payload
        }

        default:
            return state
    }
}