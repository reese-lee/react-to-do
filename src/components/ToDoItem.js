import React, { Component } from 'react';
import PropTypes from 'prop-types';

export class ToDoItem extends Component {
  getStyle = () => {
    {/* This is a short way to do this code, long way is with if-else statements; here we just use a ternary statement */}
    return {
      backgroundColor: 'gray',
      padding: '10px',
      borderBottom: '1px #ccc dotted',
      textDecoration: this.props.todo.completed ? 'line-through' : 'none'
    }
  }
  render() {
    return (
      <div style={this.getStyle()}>
      {/*}//this is where you say what you want to show
      //whatever text we have here is what will be displayed, because we are calling this component in ToDo*/}
        <p>{ this.props.todo.title }</p>
      </div>
    )
  }
}
//PropType for ToDoItem
//It is called todo because it is coming from the ToDos component, where we have listed the variable name as todo
ToDoItem.propTypes = {
  todo: PropTypes.object.isRequired
}

export default ToDoItem;
