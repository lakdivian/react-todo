import React, { Component } from 'react'
import PropTypes from 'prop-types';

class TodoItem extends Component {


     getStyles = () => {
         return ({
             textDecoration: this.props.todo.completed ? 'line-through' : 'none',
             backgroundColor: '#ccc',
             borderBottom: '1px black dotted',
             padding: '10px'
          }
         );
     };

     render(){
         const { id, title } = this.props.todo;

         return(
             <div style={this.getStyles()}>
                <input type="checkbox" onChange={this.props.completion.bind(this,id)} />{' '}
                <span>{ title }</span>
                <button style={btnStyle} onClick={this.props.delete.bind(this,id)} >X</button>
             </div>
         )
     }
}

TodoItem.propTypes = {
    todo: PropTypes.object.isRequired,
    completion: PropTypes.func.isRequired,
    delete: PropTypes.func.isRequired
}

const btnStyle = {
    background: '#ff0000',
    color: '#fff',
    borderRadius: '50%',
    cursor: 'pointer',
    float: 'right',
    border: 'none',
    padding: '5px 10px'
}

export default TodoItem;
