import React, { Component } from 'react'
import { View, Text, FlatList, Image, Dimensions, StyleSheet } from 'react-native'
import { Thumbnail, CardItem, Card } from 'native-base'

import postsData from '../../assets/data/postsData'
import TopPart from './top/top'
import BottomPart from './bottom/bottom'


export default class Posts extends Component {
    render() {
        console.log("Data", postsData)
        const Posts = (item) => {
            if (item.type == "text") {
                return (
                    <Card>
                        <TopPart name={item.username} time={item.time} />
                        <View style={styles.textView}>
                            <Text style={styles.textPost}>{item.post}</Text>
                        </View>
                        <BottomPart />
                    </Card>
                )
            } else if (item.type == "image") {
                <Card>
                    <TopPart name={item.username} time={item.time} />
                    <View style={styles.imageView}>
                        <Image
                            source={item.post}
                            style={styles.imagePost}
                            resizeMode="cover"
                            resizeMethod="scale"
                        />
                    </View>
                    <BottomPart />
                </Card>
            }
        }
        return (
            <FlatList
                data={postsData}
                keyExtractor={(item, index) => index.toString()}
                renderItem={({ item }) =>
                <View>
                    {item.type == "text" ?
                     (
                        <Card>
                            <TopPart name={item.username} time={item.time} />
                            <View style={styles.textView}>
                                <Text style={styles.textPost}>{item.post}</Text>
                            </View>
                            <BottomPart />
                        </Card>
                    ): <Card>
                    <TopPart name={item.username} time={item.time} />
                    <View style={styles.imageView}>
                        <Image
                            source={item.post}
                            style={styles.imagePost}
                            resizeMode="cover"
                            resizeMethod="scale"
                        />
                    </View>
                    <BottomPart />
                </Card>}
                </View>
                    // <View>
                    //     {Posts(item)}
                    // </View>
                }
            />
        )
    }
}



const styles = StyleSheet.create({
    textView: {
        justifyContent: 'center',
        alignItems: "center",
        left: 2
    },
    textPost: {
        fontSize: 16,
        color: "#000"
    },
    imageView: {
        borderTopWidth: 1,
        borderBottomWidth: 1,
        borderColor: "#ccc"
    },
    imagePost: {
        height: Dimensions.get('screen').height * 0.8,
        width: "100%"
    }
})