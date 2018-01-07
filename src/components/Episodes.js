import React, { Component } from 'react'
import {
    View,
    Text,
    StyleSheet,
    ScrollView,
    TouchableWithoutFeedback,
    ImageBackground
} from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome'
import { replaceHttps, removeHtmlTags } from '../lib'

class Episodes extends Component {

    getThumbnail = (item) => {
        const localImagePath = require('../images/default-image.png')
        return item.image ? { uri: replaceHttps(item.image.original) } : localImagePath
    }

    renderEpisodes = () => {
        console.log("Props ", this.props.navigation)
        const { currentSeason, episodes } = this.props.navigation.state.params

        return episodes.filter((element) => {
            return element.season == currentSeason
        }).map((item, i) => {
            const img = this.getThumbnail(item)

            return (
                <View style={styles.video} key={i}>

                    <View style={styles.videoEpisode}>

                        <ImageBackground style={styles.image} source={img}>
                            <View style={styles.buttonPlay}>
                                <TouchableWithoutFeedback>
                                    <View style={{ backgroundColor: 'transparent' }}>
                                        <Icon
                                            style={styles.iconPlay}
                                            name="play-circle"
                                            size={30}
                                            color="white"
                                        />
                                    </View>
                                </TouchableWithoutFeedback>
                            </View>
                        </ImageBackground>

                        <View style={styles.episodeName}>
                            <Text style={styles.text}>{item.number}. {item.name}</Text>
                            <Text style={styles.text}>{item.runtime}</Text>
                        </View>
                    </View>
                    <Text style={styles.summary}>{removeHtmlTags(item.summary)}</Text>
                </View>
            )
        })
    }

    render() {
        const { navigate } = this.props.navigation
        const { getSeason, seasons, currentSeason } = this.props.navigation.state.params

        console.log("Data ", this.props.navigation.state.params)

        return (
            <View style={styles.container}>
                {seasons == 1 ?
                    <TouchableWithoutFeedback>
                        <View>
                            <Text style={styles.buttonText}>Season {currentSeason}</Text>
                        </View>
                    </TouchableWithoutFeedback> :
                    <TouchableWithoutFeedback onPress={() => navigate('EpisodesPicker',
                        { getSeason: getSeason, seasons: seasons, currentSeason: currentSeason }
                    )}>
                        <View style={styles.buttonWithIcon}>
                            <Text style={styles.buttonText}>Season {currentSeason}</Text>
                            <Icon
                                style={styles.iconDown}
                                name="chevron-down"
                                color="white"
                                size={10}
                            />
                        </View>
                    </TouchableWithoutFeedback>
                }
                <ScrollView style={{ marginBottom: 20 }}>
                    <View style={styles.renderEpisodes}>
                        {this.renderEpisodes()}
                    </View>
                </ScrollView>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 10,
        backgroundColor: '#000'
    },
    buttonWithIcon: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    buttonText: {
        color: 'white'
    },
    iconDown: {
        marginLeft: 5
    },
    renderEpisodes: {
        marginTop: 10
    },
    image: {
        width: 150,
        height: 80,
        marginRight: 10
    },
    buttonPlay: {
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1
    },
    episodeName: {
        justifyContent: 'center'
    },
    videoEpisode: {
        flexDirection: 'row'
    },
    text: {
        color: 'white'
    },
    summary: {
        color: 'grey',
        marginVertical: 10
    }
})

export default Episodes