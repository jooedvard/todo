import React, { Component } from "react";
import "../css/todo.css";
import 'react-calendar/dist/Calendar.css';
import Calendar from 'react-calendar';

class Nav extends Component {
  constructor(props) {
    super(props);
    this.todoInput = React.createRef();
    this.state = {
      todoID: 1,
      prioritize:"",
      date:new Date()
    };
  }

  showInput = () => {
    this.todoInput.current.classList.remove("invisible");
  };

  newTodo = () => {
    let inputText = document.querySelector("#todoinput");
    this.props.addTodo({
      title: inputText.value,
      todoID: this.state.todoID,
      prioritize:this.state.prioritize,
      date:this.state.date
    });
    this.setState({ todoID: this.state.todoID + 1 });
    inputText.value = "";
  };

  change(e) {
    if (e.key === "Enter") {
      this.newTodo();
    }
  }

  onCalendarChanger(e){
    this.setState({date:new Date(e)})
    console.log(this.state.date)
  }

  onSelect(e){
    this.setState({prioritize:e.target.value});
    
    this.showInput();
  }

  render() {
    return (
      <div className="container">
        
        <div className="row">
          <div className="col-md-5">
         
          <div className="form-floating">
          
            <select className="form-select" onChange={(e)=>{this.onSelect(e)}}>
              <option defaultValue="">Choose prioritize</option>
              <option value={1}>Prioritize 1 </option>
              <option value={2}>Prioritize 2</option>
              <option value={3}>Prioritize 3</option>
            </select>
            <label htmlFor="floatingSelect">Prioritize</label>
          </div>
          </div>
          
        </div>
        <div className="row ">
       
        <div className="col-md-5 mt-3">
        <div className="calendar"><Calendar onChange={(e)=>{this.onCalendarChanger(e)}}></Calendar></div>
        
        <div ref={this.todoInput} className="invisible  ">
       
          <input
            type="text"
            onKeyDown={(e) => {
              this.change(e);
            }}
            className="form-control flex-fill"
            id="todoinput"
            placeholder="Write here..."
          />
          <button
            className=" btn btn-small btn-outline-primary mt-3"
            onClick={() => {
              this.newTodo();
            }}>Ok</button>
        </div>
        
        </div>
        </div>
        
       
      </div>
    );
  }
}

export default Nav;
