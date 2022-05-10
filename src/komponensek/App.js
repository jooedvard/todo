import React, { Component } from "react";
import Container from "./Container";
import Nav from "./Nav";

class App extends Component {
  constructor() {
    super();
    this.state = {
      todos: [],
      inprogress: [],
      done: [],
    };
  }

  addTodo = (todo) => {
    this.setState({ todos: [...this.state.todos, todo] });
  };

  deleteTodo = (id) => {
    this.setState({
      todos: this.state.todos.filter((todo) => {
        return todo.todoID !== id;
      }),
    });
  };

  doneTodo = (id) => {
    let todo = this.state.inprogress.find((todo) => {
      return todo.todoID === id;
    });

    todo.done = true;
    let notDoneTodos = this.state.inprogress.filter((todo) => {
      return todo.todoID !== id;
    });

    this.setState({
      done: [...this.state.done, todo],
      inprogress: notDoneTodos,
    });

    
  };

  setActiveTodo = (id) => {
    let todo = this.state.todos.find((todo) => {
      return todo.todoID === id;
    });
    todo.active = true;
    this.setState({ inprogress: [...this.state.inprogress, todo] });
  };

  render() {
    return (
      <div className="container p-3 app">
        <Nav addTodo={this.addTodo} />
        <div className="row mt-3 mb-2">
          <div className="col-md-3">
            <Container
              title={"To do"}
              badge={"badge bg-primary float-end"}
              todos={this.state.todos}
              number={this.state.todos.length}
              delete={this.deleteTodo}
              setActive={this.setActiveTodo}
            />
          </div>
          <div className="col-md-3">
            <Container
              title={"In progress"}
              badge={"badge bg-warning text-dark float-end"}
              todos={this.state.inprogress}
              number={this.state.inprogress.length}
              done={this.doneTodo}
            />
          </div>
          <div className="col-md-3">
            <Container
              title={"Done"}
              badge={"badge bg-success float-end"}
              todos={this.state.done}
              number={this.state.done.length}
              disabled={true}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
