import  React, { Component } from 'react';
import { connect } from 'react-redux';
import {additem,toggleitem} from '../actions';
import {Item} from './Item';

class Todo extends Component{
    state = {
        myTodos:[this.props.items]
    }

    handleChanges = e => {
        let update = this.state.myTodos.push({value:e.target.value,completed:false})
        this.setState({ myTodos: update });
        
        
    };

    updateTodo = e => {
        e.preventDefault();

        this.props.additem(this.state.myTodos);
        console.log(this.state.myTodos)
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
                        <input onChange={()=>this.handleChanges} className='todo-input'></input>
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