import React from 'react'
import { BrowserRouter as Router, NavLink, Route, Link, history } from 'react-router-dom'
class Login extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (<div onClick={this.click.bind(this)}>
            登陆的页面
        </div>)
    }
    componentWillMount() {
        console.log(this.props.match.params.id)
    }
    click() {
        this.props.history.push('/login')
    }
}
export default Login