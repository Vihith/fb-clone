import React, { Component } from 'react'
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native'
import { Icon } from 'react-native-elements'
import { Thumbnail, CardItem } from 'native-base'


import data from '../../../assets/data/data'


export default class BottomPart extends Component {
    constructor(){
        super()
        this.state={
            status : true,
            like : false
        }
        this.like = this.like.bind(this)
    }

    like(){
        this.setState({
            like : !this.state.like
        })
    }


    render() {
        return (
            <CardItem style={styles.mainContainer}>
                {!this.state.status == false && <TouchableOpacity style={styles.touchSection} onPress={() => this.like()}>
                    <Icon
                        type="material-community"
                        name={this.state.like == true ? "thumb-up" : "thumb-up-outline"}
                        size={20}
                        color={this.state.like == true ? 'blue' : 'grey'}
                        backgroundColor='white'
                    />
                    <Text style={{color : 'grey', fontWeight : 'bold', left : 3 }}>Like</Text>
                </TouchableOpacity>}
                <TouchableOpacity style={styles.touchSection}>
                    <Icon
                        type="material-community"
                        name="comment-outline"
                        color='grey'
                        size={20}
                    />
                    <Text style={{color : 'grey', fontWeight : 'bold', left : 3 }}>Comment</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.touchSection}>
                    <Icon
                        type="material-community"
                        name="share-outline"
                        color='grey'
                        size={20}
                    />
                    <Text style={{color : 'grey', fontWeight : 'bold', left : 3 }}>Share</Text>
                </TouchableOpacity>
            </CardItem>
        )
    }
}

const styles = StyleSheet.create({
    mainContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around'
    },
    touchSection : {
        flexDirection : 'row',
        alignItems : 'center',
        justifyContent : 'center',
    }
})