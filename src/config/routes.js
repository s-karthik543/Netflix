import Home from '../components/Home'

const Routes = {
    Home: {
        screen: Home,
        navigationOptions: ({ navigation }) => ({
            header: false
        })
    }
}

export default Routes