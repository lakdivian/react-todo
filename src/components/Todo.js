import React, { Component } from 'react';
import TodoItem from './TodoItem';
import PropTypes from 'prop-types';


class Todo extends Component {

    render(){

         return (
             this.props.todos.map((todo) => (
                    <TodoItem key={todo.id} todo={todo} completion={this.props.completion} delete={this.props.delete} />
             ))
         )
    }

}

Todo.propTypes = {
    todos: PropTypes.array.isRequired,
    completion: PropTypes.func.isRequired,
    delete: PropTypes.func.isRequired
}

export default Todo;
