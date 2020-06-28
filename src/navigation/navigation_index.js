import React, { Component } from 'react'
import { View } from 'react-native'
import { createMaterialTopTabNavigator, createAppContainer, createStackNavigator } from 'react-navigation'
import EntypoIcon from 'react-native-vector-icons/Entypo'
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import { Badge, Text } from 'native-base'
import { Icon } from 'react-native-elements'

import Home from '../home/home_index'
import Notification from '../notification/notification_index'
import Profile from '../profile/profile_index'
import Group from '../groups/groups_index'
import Settings from '../settings/setting_index'
import FriendRequest from '../friendRequests/friendRequest_index'
import SearchBar from '../searchBar/searchBar_index'
import UploadPost from '../home/uploads/uploadScreen'

const TopBar = createMaterialTopTabNavigator({
    Home : {
        screen : Home,
        navigationOptions : {
            tabBarIcon : ({ tintColor }) => <MaterialCommunityIcons name="home" size={24} adjustsFontSizeToFit={true} color={tintColor} />
        }
    },
    FriendRequest : {
        screen : FriendRequest,
        navigationOptions : {
            tabBarIcon : ({ tintColor }) => <MaterialCommunityIcons name="account-multiple" size={24} adjustsFontSizeToFit={true} color={tintColor} />
        }
    },
    Group : {
        screen : Group,
        navigationOptions : {
            tabBarIcon : ({ tintColor }) => <MaterialCommunityIcons name="account-group" size={24} adjustsFontSizeToFit={true} color={tintColor} />
        }
    },
    Profile : {
        screen : Profile,
        navigationOptions : {
            tabBarIcon : ({ tintColor }) => <MaterialCommunityIcons name="account-circle" size={24} adjustsFontSizeToFit={true} color={tintColor} />
        }
    },
    Notification : {
        screen : Notification,
        navigationOptions : {
            tabBarIcon : ({ tintColor }) => 
            <View style={{ flexDirection : "row" }}>
                <Badge style={{ left : 16  }} adjustable={true}>
                    <Text>9</Text>
                </Badge>
                <MaterialCommunityIcons name="bell" adjustsFontSizeToFit={true} size={24} color={tintColor} style={{ position : "absolute" }} />
            </View>
        }
    },
    Settings : {
        screen : Settings,
        navigationOptions : {
            tabBarIcon : ({ tintColor }) => <FontAwesome name="bars" size={24} adjustsFontSizeToFit={true} color={tintColor} />
        }
    },
},{
    initialRouteName : "Home",
    lazy : true,
    tabBarOptions : {
        showLabel : false,
        showIcon : true,
        swipeEnabled : true,
        activeTintColor : "blue",
        inactiveTintColor : "grey",
        pressColor : "blue",
        indicatorStyle : {
            backgroundColor : "grey"
        },
        style : {
            backgroundColor : "white"
        }
    }
})


const MainNavigation = createStackNavigator({
    TopBar : {
        screen : TopBar,
        navigationOptions : {
            header : (
                <SearchBar />
            )
        }
    },
    UploadPost : { screen : UploadPost },
}, 
{
    defaultNavigationOptions: {
        // headerStyle: {
        //     height: 4,
        //     // backgroundColor: 'black',
        //     borderBottomColor: "transparent",
        //     elevation: 0, // for android
        // },
        headerTransparent: true,
        headerBackImage:
            <View style={{ alignContent: 'center' }}>
                <Icon
                    type='material'
                    name='keyboard-arrow-left'
                    size={30}
                    paddingRight={25}
                    // paddingTop = {15}
                    color="#FFF"
                />
            </View>
        // <Image 
        //     style = {{width : 22, height : 18, padding: 15}}
        //     source={require('../assets/icons/back.png')} 
        // />
        ,
        // headerBackTitle: null,
        // headerLeftContainerStyle: {
        //     alignItems: 'center'
        // },
        // headerRightContainerStyle: {
        //     alignItems: 'center',
        //     paddingRight: 24
        // },
    },
    // initialRouteName: "Home"
    // transitionConfig: () => fromLeft(700)
})


const Nav = createAppContainer(MainNavigation)


export default Nav;