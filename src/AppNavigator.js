import React, { Component } from 'react'
import { addNavigationHelpers } from 'react-navigation'
import { connect } from 'react-redux'

import Routes from './config/routes'


class AppNavigator extends Component {

    render() {

        return (
            <Routes />
        )
    }
}


export default connect()(AppNavigator)