import React, { Component, Fragment } from "react";
import { connect } from "react-redux";

class Addtodo extends Component {
  state = {
    text: ""
  };
  onChange = e => {
    this.setState({ text: e.target.value });
  };
  onClick = () => {
    const text = this.state.text;
    this.props.onClick(text);
    this.setState({ text: "" });
  };
  render() {
    console.log(this.props.todos);
    const { todos, onDelete } = this.props;
    return (
      <div>
        <Fragment>
          <br />
          <input type="text" value={this.state.text} onChange={this.onChange} />
          <button onClick={this.onClick}>ADD TO DO</button>
          <ul>
            {Object.keys(todos).map(key => (
              <li key={todos[key].id} onClick={() => onDelete(todos[key].id)}>
                {todos[key].text}
              </li>
            ))}
          </ul>
        </Fragment>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    todos: state.todo
  };
};

const mapDispatchToProps = dispatch => {
  let nextid = 0;
  return {
    onClick: text =>
      dispatch({
        type: "ADD_TO_DO",
        id: nextid++,
        text: text
      }),

    onDelete: id =>
      dispatch({
        type: "ON_DELETE",
        delid: id
      })
  };
};

Addtodo = connect(mapStateToProps, mapDispatchToProps)(Addtodo);

export default Addtodo;