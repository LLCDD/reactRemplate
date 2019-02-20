import React from 'react'
import { BrowserRouter as Router, NavLink, Route, Link, history } from 'react-router-dom'

class Index extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            msg: 345345
        }
    }
    render() {
        return (
            <div onClick={this.f.bind(this)}> 这是路由的测试  Index  {this.state.msg}</div>
        )
    }
    f() {
        this.setState({ msg: "这hi是i士大夫" })
    }

}
export default Index