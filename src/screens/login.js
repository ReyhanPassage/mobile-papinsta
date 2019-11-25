import React, { Component } from 'react'
import { View } from 'react-native'
import {Text, Input, Button} from 'react-native-elements'
import Icon from 'react-native-vector-icons/FontAwesome'
import Axios from 'axios'
import { urlApi } from '../supports/url'
import {} from './../redux/actions/index'

export default class login extends Component {
    
    state= {
        look : true,
        username : '',
        password : ''
        
    }
    
    onBtnLoginClick = ()=>{
        const {username,password} = this.state
        if(username && password){
            Axios.post(urlApi+'auth/login', {username, password})
        }
        else {
            return alert('Form cannot empty')
        }
    }
    render() {
        return (
            <View 
            style={{flex:1, justifyContent:'center'}}>
                <Text style={{alignSelf:'center'}} h1> Papinsta </Text>
                <Input
                placeholder='username'
                leftIcon={
                    <Icon
                      name='user'
                      size={24}
                      color='black'
                      style={{paddingRight:10}}
                      
                    />
                  }
                >
                </Input>
                <Input
                secureTextEntry={this.state.look}
                placeholder='password'
                leftIcon={
                    <Icon
                    name='lock'
                    size={24}
                    color='black'
                    style={{paddingRight:10}}
                    />
                }

                rightIcon={
                    <Icon
                    name='eye'
                    size={24}
                    color='black'
                    onPress={ () => this.setState({look : !this.state.look}) }
                    />
                }
                ></Input>

                <View style={{marginTop:30}}>
                    <Button
                        title='Login'
                    
                    />
                </View>


                <View style={{flexDirection:'row', marginTop:15}}>
                <View style={{flex:1}}>
                <Button  
                    icon={
                        <Icon
                        name="facebook"
                        size={15}
                        color="white"
                        />
                    }
                    />
                </View>

                <View style={{flex:1}}>

                <Button
                    icon={
                        <Icon
                        name="google"
                        size={15}
                        color="white"
                        />
                    }
                    buttonStyle={{backgroundColor:'red'}}
                />

                </View>

                </View>
                <Text h4 style={{alignSelf:'center'}} onPress={()=> this.props.navigation.navigate('register')}> Create Account </Text>
            </View>








        )
    }
}
