import React from 'react'
import { BrowserRouter as Router, NavLink, Route, Link, history } from 'react-router-dom'
import Store from '../../redux/store'
import Action from '../../redux/action'

class Nav extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            msg: ""
        }
    }
    render() {
        return (
            <div>5434</div>
        )
    }
    componentWillMount() {
        Store.dispatch(Action.size('导航'))

    }

}
export default Nav