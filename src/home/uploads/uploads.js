import React, { Component } from 'react'
import { Text, TouchableOpacity, StyleSheet, TextInput } from 'react-native'
import { View, Thumbnail } from 'native-base'
import { Icon } from 'react-native-elements'
import ImagePicker from 'react-native-image-crop-picker'



export default class Uploads extends Component {
    constructor(){
        super()
        this.state={
            profilePic : ''
        }
    }

    selectPicture() {
        ImagePicker.openPicker({
            width: 300,
            height: 400,
            cropping: true,
            enableRotationGesture: true
        })
            .then((data) => {
                this.setState({ profilePic: data.path }, () => {
                    // this.uploadPhoto(data)
                    alert('Status successfully updated')
                })

            })
            .catch(error => {
                console.log("picture error", error.message)
            })
    }


    
    render() {
        return (
            <View style={styles.mainContainer}>
                <View style={styles.main}>
                    <TouchableOpacity style={styles.profileImage} >
                        <Icon
                            name="account-circle"
                            type="material-community"
                            size={60}
                        />
                    </TouchableOpacity>
                    <View style={styles.writeSomething}>
                        <TouchableOpacity style={{left : 10}}> 
                            <Text>Write something here... </Text>
                            <Text>ಇಲ್ಲಿ ಏನಾದರು ಬರೆಯಿರಿ...</Text>
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={styles.icons}>
                    <View style={{ width: '30%', flexDirection: 'row', justifyContent: 'center', alignItems: 'center', borderRightWidth: 0.25, borderRightColor: 'grey', height: 35 }}>
                        <Icon
                            name="video"
                            type="material-community"
                            size={30}
                            color="red"
                        />
                        <Text>Live</Text>
                    </View>

                    {/* Upload Picture is done */}
                    <TouchableOpacity style={{ width: '30%', flexDirection: 'row', justifyContent: 'center', alignItems: 'center', borderRightWidth: 0.25, borderRightColor: 'grey', height: 35 }} onPress={() => this.selectPicture()}>
                        <Icon
                            name="image-album"
                            type="material-community"
                            size={25}
                            color="green"
                        />
                        <Text>Photo</Text>
                    </TouchableOpacity>
                    
                    <View style={{ width: '30%', flexDirection: 'row', justifyContent: 'center', alignItems: 'center', height: 35 }}>
                        <Icon
                            name="location-on"
                            type="material"
                            size={30}
                            color="red"
                        />
                        <Text>Check In</Text>
                    </View>
                </View>
                <View style={{ height: 7, backgroundColor: 'grey' }}>

                </View>
            </View>)
    }
}

const styles = StyleSheet.create({
    mainContainer: {
        width: '100%',
        // height: 70,
        marginTop: 5
    },
    main: {
        height: 70,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        borderBottomColor: 'grey',
        borderBottomWidth: 0.5,
        marginBottom: 1
        // backgroundColor : 'blue'
    },
    profileImage: {
        width: '15%',
        height: 55
    },
    writeSomething: {
        width: '80%',
        height: 60,
        // backgroundColor : 'grey',
        paddingLeft: 10,
        justifyContent: 'center',
        borderRadius: 50,
        borderWidth: 0.5,
        borderColor: 'grey',
        marginRight: 5
    },
    icons: {
        flexDirection: 'row',
        justifyContent: 'space-evenly',

    }
})