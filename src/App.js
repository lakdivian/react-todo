import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';
import Todo from './components/Todo';
import Header from './components/layout/Header';
import AddTodo from './components/AddTodo';
import About from './components/Pages/About';
import { connect } from 'react-redux';
// import store from './Store';
import { updateTodo, addTodo, getItems, delItems } from './actions/itemActions';

class App extends Component {

    componentDidMount = () => {
        this.props.getItems();
    }

    completion = (id) => {
      this.props.updateTodo(id);
    }

    delete = (id) => {
          this.props.delItems(id)
    }

    addTodo = (title) => {
        this.props.addTodo(title);
    }

    render() {
      const { todos } = this.props.todo;
        return (
            <Router>
              <div className = "App" >
                <div className="container">
                    <Header / >
                    <Route exact path="/" render={props => (
                      <React.Fragment>
                          <AddTodo addTodo={this.addTodo}/>
                          <Todo todos = { todos }
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

const mapStateToProps = (state) => ({
    todo: state.todo
  });

export default connect(mapStateToProps, {addTodo, getItems, delItems, updateTodo})(App);
