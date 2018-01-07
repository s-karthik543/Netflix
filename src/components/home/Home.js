import React, { Component } from 'react'
import {
    View,
    ActivityIndicator,
    ScrollView,
    StyleSheet
} from 'react-native'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import ActionCreators from '../../actions'

import Header from './Header'
import List from './List'
import Slide from './Slider'
import Genres from './Genres'

class Home extends Component {

    constructor(props) {
        super(props)

        this.getTwoRows = this.getTwoRows.bind(this)
    }

    componentDidMount() {
        console.log("Props ", this.props)
        this.props.fetchHomeData()
    }

    toggle = () => {
        this.props.navigation.navigate('DrawerOpen')
    }

    getTwoRows = () => {
        const { shows } = this.props
        const array = shows.slice(0)
        const val = Math.floor(array.length / 2)
        const newArray = array.splice(0, val)
        return [
            array,
            newArray
        ]
    }

    render() {
        console.log("Shows ", this.props.shows)

        const { menu, isLoading } = this.props

        return (
            <View style={{ flex: 1 }}>
                <Header navigation={this.props.navigation} toggle={this.toggle.bind(this)} />
                {(isLoading &&
                    menu == 'Home') ?
                    this._renderLoader() :

                    <ScrollView style={[{ flex: 1 }, styles.container]}>

                        {menu == 'Home' ?
                            this._renderList() :
                            <Genres
                                navigation={this.props.navigation}
                                item={menu} />
                        }
                    </ScrollView>
                }
            </View>
        )
    }

    _renderLoader() {

        return (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <ActivityIndicator size="large" color="#89234a" />
            </View>
        )
    }

    _renderList() {

        return (
            <View style={{ flex: 1 }}>
                <Slide />
                <List
                    data={this.props.data}
                    getTwoRows={this.getTwoRows}
                    navigation={this.props.navigation} />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'black'
    }
})


const mapStateToProps = (state) => ({
    shows: state.shows,
    data: state.home.homeData,
    isLoading: state.home.isLoading,
    menu: state.home.menu
})

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators(ActionCreators, dispatch)

}

export default connect(mapStateToProps, mapDispatchToProps)(Home)