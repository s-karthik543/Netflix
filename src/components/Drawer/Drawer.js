import React from 'react'
import { DrawerNavigator } from 'react-navigation'
import DrawerComponent from './DrawerComponent'
import Home from '../home/Home'


const Drawer = DrawerNavigator({
    Home: {
        screen: Home
    }
}, {
        contentComponent: props => (<DrawerComponent {...props}/>)
    })

export default Drawer