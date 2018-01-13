import React from 'react'
import { StackNavigator } from 'react-navigation'
import Home from '../components/home/Home'
import Search from '../components/Search'
import Details from '../components/Details'
import Episodes from '../components/Episodes'
import EpisodesPicker from '../components/EpisodesPicker'
import VideoPlayerView from '../components/VideoPlayerView';
import Drawer from '../components/Drawer/Drawer'

const Routes = StackNavigator({
    Home: {
        screen: Drawer,
        navigationOptions: ({ navigation }) => ({
            header: false
        })
    },
    Search: {
        screen: Search,
        navigationOptions: ({ navigation }) => ({
            header: false
        })
    },
    Episodes: {
        screen: Episodes,
        navigationOptions: ({ navigation }) => ({
            header: false
        })
    },
    Details: {
        screen: Details,
        navigationOptions: ({ navigation }) => ({
            header: false
        })
    },
    EpisodesPicker: {
        screen: EpisodesPicker,
        navigationOptions: ({ navigation }) => ({
            header: false
        })
    },
    Video: {
        screen: VideoPlayerView,
        navigationOptions: ({ navigation }) => ({
            header: false
        })
    }
}, {
        headerMode: 'screen'
    })

export default Routes