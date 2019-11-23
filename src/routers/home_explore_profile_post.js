import React from 'react'
import {createMaterialTopTabNavigator} from 'react-navigation-tabs'
import {createAppContainer} from 'react-navigation'
import Home from './../screens/home'
import Icon from 'react-native-vector-icons/FontAwesome'
import Explore from '../screens/explore'
import PostImage from '../screens/post'
import EditProfile from '../screens/profile'

const MainTab = createAppContainer(createMaterialTopTabNavigator({

    home : {
        screen : Home,
        navigationOptions : {
            tabBarIcon : <Icon name='home' size={24} /> 
        }
    },
    explore : {
        screen : Explore,
        navigationOptions : {
            tabBarIcon : <Icon name='search' size={24} />
        }
    },
    post : {
        screen : PostImage,
        navigationOptions : {
            tabBarIcon : <Icon name='plus' size={24} />
        }
    },
    editProfile : {
        screen : EditProfile,
        navigationOptions : {
            tabBarIcon : <Icon name='user' size={24} />
        }
    }
},
{
    tabBarPosition : 'bottom',
    tabBarOptions : {
        showIcon : true,
        showLabel: false,
        indicatorStyle :{
                position : "absolute",
                top: 0,
                backgroundColor: 'black'
        },
        style : {   
            backgroundColor : "white",
            borderTopWidth : 0.8,
            borderTopColor: 'gray'
        }
    }
}

))

export default MainTab;
