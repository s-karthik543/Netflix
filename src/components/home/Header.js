import React from 'react'
import {
    Text,
    View,
    StyleSheet,
    TouchableOpacity,
    TouchableWithoutFeedback,
    Image
} from 'react-native'

import Icon from 'react-native-vector-icons/FontAwesome'

const Header = props => {

    const { navigate } = props.navigation

    return (
        <View style={styles.container}>

            <TouchableOpacity style={{ padding: 5 }} onPress={() => props.toggle()}>
                <Icon
                    name="bars"
                    color="white"
                    size={25} />
            </TouchableOpacity>

            <TouchableWithoutFeedback onPress={() => navigate('Search')}>
                <Icon
                    name="search"
                    color="white"
                    size={25} />
            </TouchableWithoutFeedback>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        height: 60,
        alignItems: 'center',
        justifyContent: 'space-between',
        backgroundColor: 'black',
        paddingHorizontal: 15,
        paddingTop: 5,
    },
    logo: {
        width: 120,
        height: 40
    }
})

export default Header

