import React, { Component } from 'react'
import { Text, StyleSheet, FlatList, Image } from 'react-native'
import { View, Thumbnail } from 'native-base'
import data from '../../assets/data/data'

export default class Stories extends Component {
    render() {
        return (
            <View>
            <View style={styles.mainContainer}>
                <Text style={{ fontSize: 18, fontWeight: "bold", color: "#000", left: 10 }}>Stories</Text>
                {!data == 0 && <FlatList
                    horizontal
                    data={data}
                    style={styles.flatList}
                    keyExtractor={(item, index) => index.toString()}
                    renderItem={({ item }) =>
                        <View style={{ borderRadius: 3 }}>
                            <Image source={item.image} resizeMode="cover" style={styles.images} />
                            <View style={styles.thumbnalis}>
                                <Thumbnail
                                    small
                                    source={item.profilePic}
                                />
                            </View>
                            <View style={styles.username}>
                                <Text style={{ color: "white", fontWeight: 'bold' }}>{item.name}</Text>
                            </View>
                        </View>
                    }
                />}
            </View>
            <View style={{ height: 7, backgroundColor: 'grey', marginTop : 5 }}>

            </View>
            </View>
        )
    }
}


const styles = StyleSheet.create({
    mainContainer: {
        height: 160,
        width: '100%',
        // backgroundColor : 'blue'
    },
    flatList: {

    },
    images: {
        height: 132,
        width: 100,
        borderRadius: 12,
        margin: 3
        // justifyContent : 'space-evenly',
        // alignContent : 'space-between'
    },
    thumbnalis: {
        position: 'absolute',
        width: 120,
        alignItems: 'flex-start',
        justifyContent: 'center',
        // bottom : 0
        top: 7,
        left: 7
    },
    username: {
        position: 'absolute',
        width: 120,
        alignItems: 'flex-start',
        justifyContent: 'center',
        bottom: 3,
        // top: 0,
        left: 13,
    }
})