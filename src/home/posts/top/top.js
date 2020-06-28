import React, { Component } from 'react'
import { Text, View, StyleSheet, Image } from 'react-native'
import { Icon } from 'react-native-elements'
import { Thumbnail, CardItem } from 'native-base'


import data from '../../../assets/data/data'


export default class TopPart extends Component {
    render() {
        return (
            <CardItem style={styles.mainContainer}>
                <View style={styles.thumbnailContainer}>
                    <Thumbnail source={require('../../../assets/images/user1.jpg')} resizeMethod="scale" size={25} />
                    {/* <Image source={require('../../../assets/images/user1.jpg')}  size={12}  /> */}
                    <View>
                        <Text style={styles.nameStyle}>{this.props.name}</Text>
                        <Text style={styles.timeStyle}>{this.props.time}</Text>
                    </View>
                </View>
                <View style={{ height : 45,}}>
                    <Icon
                        type="material-community"
                        name="dots-horizontal"
                        size={20}
                    />
                </View>
            </CardItem>
        )
    }
}

const styles = StyleSheet.create({
    mainContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    thumbnailContainer: {
        flexDirection: 'row'
    },
    nameStyle: {
        fontWeight: 'bold',
        color: "#000",
        fontSize: 15
    },
    timeStyle: {
        fontSize: 12
    }
})