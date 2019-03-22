import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';
import Todo from './components/Todo';
import Header from './components/layout/Header';
import AddTodo from './components/AddTodo';
import About from './components/Pages/About';
import axios from 'axios';

class App extends Component {

    state = {
        todos: []
    }

    componentDidMount() {

    axios.get('http://jsonplaceholder.typicode.com/todos?_limit=5')
         .then((res) => {
           this.setState({
             todos: res.data
           })
         })

    }

    completion = (id) => {

        this.setState({
            todos: this.state.todos.map((todo) => {
                if (todo.id === id) {
                    todo.completed = !todo.completed
                }
                return todo;
            })
        })
    }

    delete = (id) => {

      axios.delete(`http://jsonplaceholder.typicode.com/todos/${id}`)
           .then((res) => {
             this.setState({
                 todos: this.state.todos.filter((todo) => (
                     todo.id !== id
                 ))
             })
           })

    }

    addTodo = (title) => {
      // const todos = this.state.todos.sort((f,s) => (
      //         f.id - s.id
      // ))
      // const new_id = todos[todos.length - 1].id + 1;
      // const new_todo = {
      //         id: new_id,
      //         title,
      //         completed: false
      // }
      axios.post("http://jsonplaceholder.typicode.com/todos",{
              title,
              completed: false
          })
           .then((res) => {
             this.setState({
               todos: [...this.state.todos,res.data]
             })
           })

    }

    render() {
        return (
          <Router>
            <div className = "App" >
               <div className="container">
                  <Header / >
                  <Route exact path="/" render={props => (
                    <React.Fragment>
                        <AddTodo addTodo={this.addTodo}/>
                        <Todo todos = { this.state.todos }
                             completion = { this.completion }
                             delete = { this.delete }
                             />
                    </React.Fragment>
                  )} />
                  <Route path="/about" component={About} />
              </div>
            </div>
         </Router>
        );
    }
}

export default App;
