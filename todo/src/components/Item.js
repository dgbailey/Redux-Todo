import  React, { Component } from 'react';
import { connect } from 'react-redux';
import {additem,toggleitem} from '../actions';


export class Item extends Component{


    render(){
        return(
        <div className='item-container'>
            <h2 className='task-name'>{this.props.item.value}</h2>
        </div>
        )
    }
}