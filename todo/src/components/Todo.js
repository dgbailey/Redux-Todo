import  React, { Component } from 'react';
import { connect } from 'react-redux';
import {additem,toggleitem} from '../actions';

class Todo extends Component{
    

    render(){
        return(
            <div className='todo-container'>
                <h1>Redux: Todo</h1>
                <div className='display-container'>
                <div className='background'></div>
                </div>
                <div className='input container'>
                    <form className='todo-form'>
                        <input className='todo-input'></input>
                        <button type='submit'>Add</button>
                    </form>

                
                </div>
            </div>

        )
    }
    
        
    
}

//mapping redux state tree to component this.props.items
const mapStateToProps = (state) =>{
    return{
        items:state.items
    }
}
//connecting component to redux state tree and actions via this.props
export default connect(mapStateToProps,{additem,toggleitem})(Todo)