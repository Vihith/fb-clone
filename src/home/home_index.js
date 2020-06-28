import React, { Component } from 'react'
import { View,Text, ScrollView } from 'react-native'

import Posts from './posts/posts'
import Stories from './stories/stories'
import Uploads from './uploads/uploads'


export default class Home extends Component{
    render(){
        return(
            <ScrollView>
                <Uploads />
                <Stories />
                <Posts />
            </ScrollView>
        )
    }
}