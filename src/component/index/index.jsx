import React from 'react'
import { BrowserRouter as Router, NavLink, Route, Link, history } from 'react-router-dom'
import Action from '../../redux/action'
import Store from '../../redux/store'
class Index extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            msg: 345345
        }
    }
    render() {
        return (
            <div>

                这是路由的测试  Index  {this.state.msg}</div>

        )
    }
    componentWillMount() {
        Store.dispatch(Action.size('登陆'))
    }


}
export default Index