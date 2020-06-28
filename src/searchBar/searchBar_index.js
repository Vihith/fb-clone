import React, { Component } from 'react'
import { Text, TouchableOpacity, TextInput, View, StyleSheet, Icon } from 'react-native'


import { Header } from 'native-base'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import Material from 'react-native-vector-icons/MaterialIcons'

export default class SearchBar extends Component {
    constructor() {
        super()
        this.state = {
            status: true,
            textBox: true
        }
    }


    render() {
        return (
            <Header searchBar rounded>
                <View style={styles.searchBar}>
                    {/* <FontAwesome name="camera" color="white" size={26}/> */}
                    <MaterialCommunityIcons style={{width : '10%'}} name="facebook" color="white" size={26} />
                    {/* {!this.state.textBox == true ?  */}
                        <TextInput 
                            placeholder="Search" 
                            placeholderTextColor="rgba(255,255,255,0.5)"
                            underlineColorAndroid="#fff" 
                            style={styles.search} 
                        /> 
                        {/* : */}
                        {/* <Material 
                            style={styles.search}
                            name="search" 
                            color="white" 
                            size={26} 
                        /> */}
                    {/* } */}
                    <TouchableOpacity style={styles.messenger}>
                        <MaterialCommunityIcons name="facebook-messenger" color="white" size={30} />
                    </TouchableOpacity>
                </View>
            </Header>
        )
    }
}


const styles = StyleSheet.create({
    searchBar: {
        width : '100%',
        backgroundColor: "#3b5998",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center"
    },


    search: {
        width: "80%",
        left: 5,
        fontSize: 18,
        justifyContent : 'center',
        alignContent : 'flex-end'
    },


    messenger: {
        width : '10%',
        color: "#fff",
        left: 5,
        top: 3
    }
})