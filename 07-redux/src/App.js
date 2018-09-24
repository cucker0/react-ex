import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(){
    super();
    this.addTodo = this.addTodo.bind(this);
  }

  addTodo(){
    this.props.store.dispatch({
      type: "ADD_TODO",
      payload: this.refs.todoVal.value
    })
  }

  render() {
    const list = this.props.store.getState().list;
    return (
      <div className="App">
        <input type="text" ref="todoVal"/>
        <button onClick={this.addTodo}>Add</button>
        <ul>
          {list.map((item, index)=>{
            return <li key={index}>
                {item}
            </li>
          })}
        </ul>
      </div>
    );
  }
}

export default App;
