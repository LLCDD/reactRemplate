import React from 'react'
import { BrowserRouter as Router, NavLink, Route, Link, history } from 'react-router-dom'
import Action from '../../redux/action'
import Store from '../../redux/store'
class Propson extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            msg: 345345
        }
    }
    render() {
        return (
            <div> Propson </div>
        )
    }
    componentWillMount() {
        Store.dispatch(Action.size('我的'))
    }


}
export default Propson