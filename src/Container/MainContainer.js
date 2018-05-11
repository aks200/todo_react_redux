import React, { Component } from "react";
import Addtodo from "../Components/Addtodo";
import { connect } from "react-redux";

class MainContainer extends Component {
  render() {
    const { onClick, onDelete } = this.props;
    return (
      <div>
        <Addtodo onClick={onClick} onDelete={id => onDelete(id)} />
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

MainContainer = connect(mapStateToProps, mapDispatchToProps)(MainContainer);
MainContainer = connect(mapStateToProps, mapDispatchToProps)(Addtodo);

export default MainContainer;
