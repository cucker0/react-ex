import React, { Component } from 'react';

class TodoList extends Component{
	render(){
		return(
			<div>
				<input type="text" ref="todoVal"/>
				<button onClick={()=>this.props.onClick(this.refs.todoVal.value)}>Add</button>
				{/* 将来的数据显示在这里*/}
				<ul>
					{
						this.props.list.map((item, index)=>{
							return (
								<li key={index}>
									{item}
								</li>
							)
						})
					}
				</ul>

			</div>
		)
	}
}

export default TodoList