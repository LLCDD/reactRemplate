import React from 'react'
import { BrowserRouter as Router, NavLink, Route, Link, history } from 'react-router-dom'
import Action from '../../redux/action'
import Store from '../../redux/store'
import $ from 'jquery'
class Look extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            msg: ""
        }
    }
    render() {
        return (
            <div onClick={this.tap.bind(this)}> look</div>
        )
    }
    tap() {
        this.props.history.goBack();
    }
    componentDidMount() {
        Store.dispatch(Action.size('发现'))
        $('.App-header').stop().show()
        console.log(this.props)

    }


}
export default Look