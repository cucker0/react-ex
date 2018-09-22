import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';


class Child extends Component{
  componentWillUnmount(){
    console.log("这是子组件componentWillUnmount")
  }
  render(){
    return(
      <div>
        子组件
      </div>
    )
  }
}

class App extends Component {
  constructor(){
    super();
    //初始化state
    this.state = {
      flag: false
    }
	  this.toggle = this.toggle.bind(this);
  }

  componentWillMount(){
    console.log("componentWillMount")
  }

  componentDidMount(){
    console.log("componentDidMount")
  }

  shouldComponentUpdate(){
    //控制是否显示
    console.log("shouldComponentUpdate");
    // return true;
    return false;
  }

  componentWillUpdate(){
    console.log("componentWillUpdate")
  }

	componentDidUpdate(){
		console.log("componentDidUpdate")
	}

  toggle(){
    this.setState({
      flag: !this.state.flag
    })
  }


  render() {
    console.log("render")
    return (
      <div className="App">
        react
        <button onClick={this.toggle}>开/关子组件</button>
        {this.state.flag ? <Child/> : ""}
      </div>
    );
  }
}

export default App;
