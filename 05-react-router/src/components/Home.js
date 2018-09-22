import React, { Component } from 'react';
import { Link, NavLink } from 'react-router-dom'
class Home extends Component{
	constructor(){
		super();
		this.state = {
			tels : ['10010', '10086', '10000']
		}
	}

	render(){
		return(
			<div>
				<ul>
					{this.state.tels.map((item, index)=>{
						return(
							<li key={index}>
								<NavLink to={`/detail/${item}`}>{item}</NavLink>
							</li>
						)
					})}
					<li>
						<NavLink to="/detail">无参数链接</NavLink>
					</li>
					<li>
						<NavLink to="/detail/abc">非数字链接</NavLink>
					</li>
					<li>
						<NavLink to="/detail/112233">112233</NavLink>
					</li>
				</ul>
			</div>
		)
	}

}

export default Home