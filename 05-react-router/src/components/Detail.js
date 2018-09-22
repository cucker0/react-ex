import React, { Component } from 'react';

class Detail extends Component{
	render(){
		return(
			<div>
				详情页
				<p>电话：{this.props.match.params.tel}</p>
			</div>
		)
	}

}

export default Detail