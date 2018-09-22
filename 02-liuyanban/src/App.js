import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';

class LiuYanBan extends Component{

  constructor(){
    super();
    this.state = {
	    comments: [
        {
          author:'哈哈',
          time:new Date().getTime(),
          comment: '这是测试内容'
        }
      ]
    }
    //修正指针
    this.addComment = this.addComment.bind(this);
  }

  addComment(){
    var obj = {
	    author:this.refs.author.value,
	    time:new Date().getTime(),
	    comment: this.refs.comment.value
    }
    this.state.comments.push(obj);
    this.setState({
	    comments:this.state.comments
    })
  }

  formatTime(timestamp){
    var minutes = (new Date().getTime() - timestamp) / 1000 / 60;
	  minutes = Math.floor(minutes);
	  if (minutes < 1){
	    return "刚刚"
    }else{
	    return minutes + "分钟前"
    }

  }

  render(){
    return (
      <div>
        <h2>留言板</h2>
        <div className="comments">
          {
            this.state.comments.map((item, index)=>{
              return <div key={index}>
                <span className="author">{item.author}</span>
                <span className="timestamp">{this.formatTime(item.time)}</span>
                <p>{item.comment}</p>
              </div>
            })
          }
        </div>
        <input type="text" ref="author"/><br/>
        <textarea ref="comment"></textarea><br/>
        <button onClick={this.addComment}>发表留言</button>
      </div>
    )
  }
}

class App extends Component {
  render() {
    return (
      <div className="App">
        <LiuYanBan/>
      </div>
    );
  }
}

export default App;
