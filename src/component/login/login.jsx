import React from 'react'
import { BrowserRouter as Router, NavLink, Route, Link, history } from 'react-router-dom'
import Store from '../../redux/store';
import Action from '../../redux/action'
class Login extends React.Component {
    constructor(props) {
        super(props)
        this.change = this.change.bind(this)
    }
    render() {
        return (<div onClick={this.click.bind(this)}>
            登陆的页面
        </div>)
    }
    change() {
        this.setState({ arr: Store.getState })
    }
    componentWillMount() {

        Store.dispatch(Action.size('登陆'))
    }
    click() {
        this.props.history.push('/login')
    }
}
export default Login