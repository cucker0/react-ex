import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import ReactAddonsCssTransitionGroup from 'react-addons-css-transition-group'

class App extends Component {
  constructor(){
    super();
    this.state = {
      mylist: []
    }
    this.addTodo = this.addTodo.bind(this);
    this.delTodo = this.delTodo.bind(this);
  }

  addTodo(){
    if(this.refs.addval.value){
	    this.state.mylist.push(this.refs.addval.value);
	    this.setState({
		    mylist: this.state.mylist
	    })
    }
  }

  delTodo(index){
    this.state.mylist.splice(index, 1);
	  this.setState({
		  mylist: this.state.mylist
	  });
  }

  render() {
    let items = this.state.mylist.map((item, index)=>{
      return <li key={index}>
        {item}<button onClick={()=>this.delTodo(index)}>X</button>
      </li>
    })

    return (
      <div className="App">
        <input type="text" ref="addval"/>
        <button onClick={this.addTodo}>AddTodo</button>
        <ul>
          <ReactAddonsCssTransitionGroup
          transitionName="reactAnim"
          transitionEnterTimeout={500}
          transitionLeaveTimeout={300}
          >
          {items}
          </ReactAddonsCssTransitionGroup>
        </ul>
      </div>
    );
  }
}

export default App;
