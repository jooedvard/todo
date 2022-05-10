import React, { Component } from "react";
import Todo from "./Todo";
import "../css/todo.css";

class Container extends Component {
  render() {
    return (
      <div className="border p-3">
        <div className={this.props.badge}>{this.props.number}</div>
        <h4>{this.props.title}</h4>
        {this.props.todos.map((todo) => {
            
          return (
            <Todo
              title={todo.title}
              key={todo.todoID}
              id={todo.todoID}
              delete={this.props.delete}
              setActive={this.props.setActive}
              done={this.props.done}
              disabled={this.props.disabled}
              prioritize = {todo.prioritize}
              date = {todo.date}
            ></Todo>
          );
        })}
      </div>
    );
  }
}

export default Container;
