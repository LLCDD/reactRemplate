import React, { Component } from 'react';
import { BrowserRouter as Router, NavLink, Route, Link, history } from 'react-router-dom';
import logo from './logo.svg';
import './App.css';
import Login from './component/login/login'
import Index from './component/index/index'
class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      msg: "345"
    }
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          {this.state.msg}
        </header>
        <section className="section">
          <Router>
            <div>

              <Link to={'/haer/' + this.state.msg}> 34534534534534534534</Link>
              <Route path={'/haer/:id'} component={Login} />
              <Route path="/login" component={Index} />

              <p onClick={this.clcik.bind(this)}>233345</p>
            </div>
          </Router>
        </section>
        <footer>
          <span>主页</span>
          <span>导航</span>
          <span>发现</span>
          <span>我的</span>
        </footer>
      </div >
    );
  }
  clcik() {
    console.log(this.props.history)
  }
  componentWillMount() {
    this.http.post('/api/register')
  }
}

export default App;
