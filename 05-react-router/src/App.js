import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import Home from './components/Home'
import News from './components/News'
import Others from './components/Others'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <div className="rlink">
            <Link to='/'>主页</Link>
            <Link to='/news'>新闻</Link>
            <Link to='/others'>其他</Link>

            <hr/>
	          {/* exact  精确匹配  */}
            <Route exact path='/' component={Home} />
            <Route path='/news' component={News} />
            <Route path='/others' component={Others} />
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
