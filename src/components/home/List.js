import React, { Component } from 'react'
import {
    Text,
    View,
    StyleSheet,
    Image,
    FlatList,
    TouchableWithoutFeedback
} from 'react-native'

class List extends Component {

    componentWillMount() {
        // Orientation.lockToPortrait()
    }

    _renderItem(item) {
        const { navigate } = this.props.navigation
        return (
            <TouchableWithoutFeedback
                onPress={() => navigate('Details', { item: item })} >

                <Image
                    style={{ width: 120, height: 180 }}
                    source={{ uri: item.image }} />
            </TouchableWithoutFeedback>
        )
    }

    render() {
        const { getTwoRows } = this.props
        console.log("Data ", this.props.data)
        const { myList, topPics } = this.props.data
        return (
            <View style={{ flex: 1 }}>
                <View>
                    <Text style={styles.text}>My List</Text>
                    <FlatList
                        horizontal
                        SeparatorComponent={() => <View style={{ width: 5 }} />}
                        renderItem={({ item }) => this._renderItem(item)}
                        keyExtractor={(item, index) => item._id}
                        // data={getTwoRows()[0]} />
                       data={myList} /> 

                </View>

                <View>
                    <Text style={styles.text}>Top Picks For You</Text>
                    <FlatList
                        horizontal
                        SeparatorComponent={() => <View style={{ width: 5 }} />}
                        renderItem={({ item }) => this._renderItem(item)}
                        keyExtractor={(item, index) => index}
                        data={topPics}/>
                         {/* data={getTwoRows()[1]} /> */}
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    text: {
        color: 'white'
    }
})

export default List