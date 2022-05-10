import { Component } from "react";
import { FaFlag } from "react-icons/fa";

class Todo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      active: false,
      disabled: this.props.disabled,
      prioritize: this.props.prioritize,
      date:this.props.date
    };
  }

  getPrioritize = (value) => {
    let colors = ["greenyellow", "yellow", "red"];
    return colors[value - 1];
  };

  formatDate = (value) => {
    
    var dd = String(value.getDate()).padStart(2, '0');
    var mm = String(value.getMonth() + 1).padStart(2, '0'); //January is 0!
    var yyyy = value.getFullYear();
    
    
    return  yyyy +'.'+mm+'.'+dd+"."
  };

  render() {
    if (this.state.disabled) {
      return (
        <div className={"p-2 disabled"}>
          <span className="todoid">{this.props.id + ". "}</span>
          <span>{this.props.title}</span>
          <span>
            {" "}
            <FaFlag color={this.getPrioritize(this.state.prioritize)}></FaFlag>
          </span>
          <br></br>
          <span>{}</span>
        </div>
      );
    }

    if (this.props.delete === undefined) {
      return (
        <div
          className={"p-2 todo2 "}
          onClick={() => {
            this.props.done(this.props.id);
          }}
        >
          <span className="todoid">{this.props.id + ". "}</span>
          <span>{this.props.title}</span>
          <span>
            {" "}
            <FaFlag color={this.getPrioritize(this.state.prioritize)}></FaFlag>
          </span>
          <br></br>
          <span>{this.formatDate(this.props.date)}</span>
        </div>
      );
    }


    return (
      <div className="d-flex align-items-center justify-content-between">
        <div
          className="p-2 todo"
          onClick={() => {
            this.setState({ active: true });
            this.props.setActive(this.props.id);
            this.props.delete(this.props.id);
          }}
        >
          <span className="todoid">{this.props.id + ". "}</span>
          <span>{this.props.title} </span>
          <span>
            {" "}
            <FaFlag color={this.getPrioritize(this.state.prioritize)}></FaFlag>
          </span>
          <br></br>
          <span>{this.formatDate(this.props.date)}</span>
        </div>
        <button
          className="btn-close btn-small float-end close"
          onClick={() => {
            this.props.delete(this.props.id);
          }}
        ></button>
      </div>
    );
  }
}

export default Todo;
