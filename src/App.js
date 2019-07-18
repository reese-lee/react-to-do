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
        completed: true
      },
      {
        id: 3,
        title: 'Feed yo dawggos',
        completed: false
      },
    ]
  }
  //lifecycle method , only one that is required
  render () {
    return (
      //returning JSX--easier way to write JS for output in browser
      <div className="App">
      {/*setting up props that we can then have show in other components*/}
        <ToDos todos={this.state.todos} />
      </div>
    );
  }
}

export default App;
//todos is a proptype
