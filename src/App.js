import React, { Component } from 'react';
import { BrowserRouter as Router, NavLink, Route, Link, history } from 'react-router-dom';
import logo from './logo.svg';
import './App.css';
import Login from './component/login/login'
import Index from './component/index/index'
import Action from './redux/action'
import Store from './redux/store'
import Reducer from './redux/reducer'
import NavL from './component/nav/nav'
import Look from './component/look/look'
import Propson from './component/propson/propson'
class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      arr: ''
    }
    this.change = this.change.bind(this)
  }
  change() {
    this.setState({ arr: Store.getState })
  }
  componentDidMount() {
    // dispatch 这个是 对 数据的推送
    // Store.dispatch(Action.cid(i))
    Store.subscribe(this.change)

  }
  render() {
    return (
      <Router>
        <div className="App">
          <header className="App-header">
            {Store.getState().msg}

          </header>
          <section className="section">
            {/* <Route path={'/haer/:id'} component={Login} /> */}

            {/* <Route path="/login" component={Index} /> */}
            <Route path="/index" component={Index} />
            <Route path="/nav" component={NavL} />
            <Route path="/look" component={Look} />
            <Route path="/propson" component={Propson} />

          </section>

          <footer>
            <NavLink to={'/index'} >主页</NavLink>
            <NavLink to={'/nav'} > 导航</NavLink>
            <NavLink to={'/look'} > 发现</NavLink>
            <NavLink to={'/propson'} > 我的</NavLink>
          </footer>

        </div >
      </Router >
    );
  }

  componentWillMount() {
    console.log(this.props)
  }
}

export default App;
