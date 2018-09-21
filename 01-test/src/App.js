import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class TodoList extends React.Component {
	constructor(){
		super();
		// 设置初始的state
		this.state = {
			"li":['aaa', 'bbb', 'ccc']
		}
		//修改指针
		this.addTodo = this.addTodo.bind(this);
	}


	addTodo(){
		console.log(this);
		console.log(this.refs.myVal.value);

		this.state.li.push(this.refs.myVal.value);
		//更新页面
		this.setState({
			li:this.state.li
		})
	}
	render(){
		return(
			<div>
				<input type="text" ref="myVal" />
				{/*修正指针*/}
				{/*<button onClick={this.addTodo.bind(this)}>AddTodo</button>*/}
				<button onClick={this.addTodo}>AddTodo</button>
				<button onClick={()=>{this.props.fatochild("这是来自子组件的问候...")}}>子组件传递数据</button>
				<br/>
				<ul>
					<li>第一个todo</li>
					<li>第二个todo</li>
					<li>第三个todo</li>
					<li>第四个todo</li>
				</ul>
				<ul>
					{
						//读取state
						this.state.li.map((item, index)=>{
							return <li key={index}>{item}</li>
						})
					}
				</ul>
				<h2>{this.props.info}</h2>
			</div>
		)

	}
}

// class App extends Component {
//   render() {
//     return (
//       <div className="App">
//         <header className="App-header">
//           <img src={logo} className="App-logo" alt="logo" />
//           <h1 className="App-title">Welcome to React</h1>
//         </header>
//         <p className="App-intro">
//           To get started, edit <code>src/App.js</code> and save to reload.
//         </p>
//       </div>
//     );
//   }
// }

class App extends React.Component{
	constructor(){
		super();
		this.state = {
			'message':'Hello world'
		}
		this.sendDataFromChild = this.sendDataFromChild.bind(this);
	}

	sendDataFromChild(val){
		this.setState({
			message: val
		})
	}

	render(){
		return (
			<div className="App">
				<h2>{this.state.message}</h2>
				<TodoList info="我的标题"  fatochild={this.sendDataFromChild}/>
			</div>
		)
	}
}

export default App;
