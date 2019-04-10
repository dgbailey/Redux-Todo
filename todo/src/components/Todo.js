import  React, { Component } from 'react';
import { connect } from 'react-redux';
import {additem,togglestatus} from '../actions';
import {Item} from './Item';


class Todo extends Component{
    state = {
        myTodos:[this.props.items],
        newitem:'',
        update:''
    }

    handleChanges = e => {
        console.log(e)
        let update = {value:e.target.value,completed:false}
        this.setState({ newitem: e.target.value,
            update:{value:e.target.value,completed:false}});

        
        
    };

    componentWillUpdate(newState){
        console.log('newstate',newState)
        
    }

    updateTodo = e => {
        e.preventDefault();

        this.props.additem(this.state.update);
        this.setState({newitem:''});
        
        
    };



    render(){
        return(
            <div className='todo-container'>
                <h1>Redux: Todo</h1>
                <div className='display-container'>
                <div className='background'></div>
                {this.props.items.map(todo => <Item key={Math.random()} togglestatus={this.props.togglestatus} item={todo} items={this.state.myTodos}/>)}
                </div>
                <div className='input container'>
                    <form onSubmit={() => this.updateTodo} className='todo-form'>
                        <input onChange={this.handleChanges} placeholder='Add item...' value={this.state.newitem} className='todo-input'></input>
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
export default connect(mapStateToProps,{additem,togglestatus})(Todo)