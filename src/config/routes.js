import Home from '../components/Home'
import Search from '../components/Search'
import Details from '../components/Details'
import EpisodesPicker from '../components/EpisodesPicker'
import VideoPlayerView from '../components/VideoPlayerView';

const Routes = {
    Home: {
        screen: Home,
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
}

export default Routes