import  React, { Component } from 'react';
import { connect } from 'react-redux';
import {additem,toggleitem} from '../actions';
import {Item} from './Item';

class Todo extends Component{
    state = {
        myTodos:[this.props.items],
        newitem:''
    }

    handleChanges = e => {
        console.log(e)
        let update = {value:e.target.value,completed:false}
        this.setState({ newitem: update });
        
        
    };

    updateTodo = e => {
        e.preventDefault();

        this.props.additem(this.state.newitem);
        
    };



    render(){
        return(
            <div className='todo-container'>
                <h1>Redux: Todo</h1>
                <div className='display-container'>
                <div className='background'></div>
                {this.props.items.map(todo => <Item item={todo}/>)}
                </div>
                <div className='input container'>
                    <form onSubmit={() => this.updateTodo} className='todo-form'>
                        <input onChange={this.handleChanges} className='todo-input'></input>
                        <button onClick={this.updateTodo}>Add</button>
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