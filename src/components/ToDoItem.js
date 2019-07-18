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
  //{/*We use a fat arrow in order to go around having to bind this menthod to "this". If we don't use the fat arrow, we would have to say "this.markComplete.bind(this)" in the input type area*/}


  render() {
    //This following statement sets it up so that we don't have to keep typing "this.props.todo"
    const { id, title } = this.props.todo;
    return (
      <div style={this.getStyle()}>
      {/*}//this is where you say what you want to show
      //whatever text we have here is what will be displayed, because we are calling this component in ToDo, also known as destructuring*/}
        <p>
          <input type='checkbox' onChange={this.props.markComplete.bind(this, id)}/> { ' ' }
          { title }
          <button onClick={this.props.delToDo.bind(this, id)} style={buttonStyle}>X</button>
        </p>
      </div>
    )
  }
}
//PropType for ToDoItem
//It is called todo because it is coming from the ToDos component, where we have listed the variable name as todo
ToDoItem.propTypes = {
  todo: PropTypes.object.isRequired
}

const buttonStyle = {
  background: '#ff0000',
  color: '#fff',
  border: 'none',
  padding: '5px 9px',
  borderRadius: '50%',
  cursor: 'pointer',
  float: 'right'
}

export default ToDoItem;

{/* props allow us to move data from this component up to ToDo component and then up to our state, App component */}
