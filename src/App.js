import React, { Component } from 'react';
import ToDos from './components/ToDos';

class App extends Component {
  state = {
    //our objects that we want to show
    todos: [
      {
        id: 1,
        title: 'Take yo mama out',
        completed: false
      },
      {
        id: 2,
        title: 'Buy yo mama blings',
        completed: false
      },
      {
        id: 3,
        title: 'Feed yo dawggos',
        completed: false
      },
    ]
  }

  //We put the function in here because App needs access to it. We pass it down to the other components with 'this.props'.
  markComplete = (id) => {
    this.setState({ todos: this.state.todos.map(todo => {
      if(todo.id === id) {
      //{/*This following statement is checking if it's true or false, and allows it to toggle back and forth between true and false. If you set it to true, it will just always be true once clicked.*/}
        todo.completed = !todo.completed
      }
      return todo;
    })})
  }

  delToDo = (id) => {
    
  }
  //lifecycle method , only one that is required
  render () {
    return (
      //returning JSX--easier way to write JS for output in browser
      <div className="App">
      {/*setting up props that we can then have show in other components*/}
        <ToDos todos={this.state.todos} markComplete={this.markComplete} delToDo={this.delToDo}/>
      </div>
    );
  }
}

export default App;
//todos is a proptype
