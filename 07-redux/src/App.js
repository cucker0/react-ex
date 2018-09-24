import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(){
    super();
    this.addTodo = this.addTodo.bind(this);
    this.addOne = this.addOne.bind(this);
    this.minusOne = this.minusOne.bind(this);
  }

  addTodo(){
    this.props.store.dispatch({
      type: "ADD_TODO",
      payload: this.refs.todoVal.value
    })
  }

  addOne(){
    this.props.store.dispatch((dispatch, state)=>{
      setTimeout(function () {
	      dispatch({
          type:'ADD_ONE',
          payload: 1
        })
      }, 2000);
    })
  }

	minusOne(){
    this.props.store.dispatch((dispatch, state)=>{
      setTimeout(function () {
        dispatch({
          type:"MINUS_ONE",
          payload: 1
        })
      }, 1000)
    })
  }

  render() {
    const list = this.props.store.getState().list;
    const count = this.props.store.getState().count;
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
        <hr/>
        <button onClick={this.minusOne}>-1</button><span>{count}</span><button onClick={this.addOne}>+1</button>
      </div>
    );
  }
}

export default App;
