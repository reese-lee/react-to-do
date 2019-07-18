import React , { Component } from 'react';
import ToDoItem from './ToDoItem';
import PropTypes from 'prop-types';

class ToDos extends Component {
  render(){
    console.log(this.props.todos);
    {/*}//looping through the todos with a map function
    //referring to props that have been instantiated in the App component
    //We are having ToDoItem component displayed here, so whatever we put in ToDoItem component is what will be displayed hereÍ*/}
    return this.props.todos.map((todo) => (
      <ToDoItem key={todo.id} todo={todo} />
    ));
  }
}

//define proptypes for this class--properties a component should have
//proptype is an object
//todos--from App component. You will see that in ToDoItem its proptype is 'todo' because that is coming from this component, where we state the variable as 'todo'
ToDos.propTypes = {
  todos: PropTypes.array.isRequired
}

export default ToDos;
