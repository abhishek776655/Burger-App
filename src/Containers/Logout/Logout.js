import React, { Component } from 'react'
import * as actions from '../../Store/Action/index'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'

class Logout extends Component {
    componentDidMount() {
        this.props.logout()
    }

    render() {
        return (
            <Redirect to="/" />
        )
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        logout: () => dispatch(actions.logout())
    }
}
export default connect(null, mapDispatchToProps)(Logout);