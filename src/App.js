import React, { Component } from 'react';
import './App.css';
import Todo from './components/Todo';

class App extends Component {

  state = {
    todos: [
      {
        id: 1,
        title: 'Going out with someone',
        completed: false
      },
      {
        id: 2,
        title: 'Dinner from outside',
        completed: false
      },
      {
        id: 3,
        title: 'Wake up tommorrow morning at 7 am',
        completed: false
      }
    ]
  }

  completion = (id) => {

      this.setState({
        todos: this.state.todos.map((todo) => {
           if(todo.id === id){
              todo.completed = !todo.completed
              return;
           }
           return todo;
        })
      })
  }

  delete = (id) => {
     this.setState({
       todos: this.state.todos.map((todo) => {
          if(todo.id === id){
            return none;
          }
          return todo;
       })
     })
  }

  render() {
    return (
      <div className="App">
          <Todo todos={this.state.todos} completion={this.completion} delete={this.delete} />
      </div>
    );
  }
}

export default App;
