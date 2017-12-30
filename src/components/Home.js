import React, { Component } from 'react'
import {
    View,
    ScrollView,
    StyleSheet
} from 'react-native'
import { connect } from 'react-redux'

import Header from './Header'
import List from './List'
import Menu from './Menu'
import Slide from './Slider'

import SideMenu from 'react-native-side-menu'

class Home extends Component {

    constructor(props) {
        super(props)

        this.state = {
            isOpen: false,
            itemSelected: 'Home'
        }
        this.getTwoRows = this.getTwoRows.bind(this)
        this.itemSelected = this.itemSelected.bind(this)
    }

    toggle = () => {
        this.setState({
            isOpen: !this.state.isOpen
        })
    }

    itemSelected = (item) => {
        this.setState({
            itemSelected: item,
            isOpen: false
        })
    }

    updateMenu = (isOpen) => {
        this.setState({ isOpen })
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

        return (
            <View style={{ flex: 1 }}>

                <SideMenu
                    menu={<Menu
                        navigation={this.props.navigation}
                        itemSelected={this.itemSelected}
                        itemSelectedValue={this.state.itemSelected}
                    />}
                    isOpen={this.state.isOpen}
                    onChange={(isOpen) => this.updateMenu(isOpen)}
                    style={{ flex: 1 }}>

                    <ScrollView style={[{ flex: 1 }, styles.container]}>
                        <Header navigation={this.props.navigation} toggle={this.toggle.bind(this)} />

                        <View style={{ flex: 1 }}>
                            <Slide />
                            <List
                                getTwoRows={this.getTwoRows}
                                navigation={this.props.navigation}
                            />
                        </View>
                    </ScrollView>
                </SideMenu>
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
    shows: state.shows
})

export default connect(mapStateToProps)(Home)