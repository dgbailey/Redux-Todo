import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import {ADDITEM,TOGGLESTATUS,CLEARCOMPLETE} from '../actions';

const initial_state = {
    items:[{value:'Add item with button',completed:false,id:0}]
}

export default (state = initial_state,action) => {
    console.log('additem reducer fire')
    let pl = action.payload;
    console.log(pl,'payload')
    console.log(action.payload,'togglepayplad')
    switch(action.type){
        
        case ADDITEM:
        return{
            items: [...state.items,
            {value:pl.value,completed:false,id:Math.random()}]
            
        }
    
        case TOGGLESTATUS:
        return{
            items:state.items.map(storeItem => storeItem.id === action.payload ? {...storeItem,completed:!(storeItem.completed)}:storeItem)
        }

        case CLEARCOMPLETE:
        return{
            items:state.items.filter(storeItem => storeItem.completed === false)
        }

        default:
            return state
    }
}