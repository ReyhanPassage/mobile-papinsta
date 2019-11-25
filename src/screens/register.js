import React, { Component } from 'react'
import { View , ActivityIndicator, AsyncStorage} from 'react-native'
import {Text, Input, Button} from 'react-native-elements'
import Icon from 'react-native-vector-icons/FontAwesome'
import Axios from 'axios'
import {onRegisterSuccess} from './../redux/actions/index'
import { urlApi } from './../supports/url'
import {connect} from 'react-redux'
import {StackActions, NavigationActions} from 'react-navigation'
import {GoogleSignin, statusCodes} from '@react-native-community/google-signin'

const web_client_id ='1026493231779-is9dk6vqafj5m9lrpkteiu1grijqnm5a.apps.googleusercontent.com'
class register extends Component {
    state ={
        look : true,
        username: '',
        password: '',
        email: '',
        confirm_password: '',
        username_avail: null,
        loading_check_username: false,
        loading_btn_register: false,
        check_storage : false

    }

    
    signIn = async () => {
        try {
          await GoogleSignin.hasPlayServices();
          const userInfo = await GoogleSignin.signIn();
          console.log( userInfo );
        } catch (error) {
            console.log(error)
        //   if (error.code === statusCodes.SIGN_IN_CANCELLED) {
        //     // user cancelled the login flow
        //   } else if (error.code === statusCodes.IN_PROGRESS) {
        //     // operation (e.g. sign in) is in progress already
        //   } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
        //     // play services not available or outdated
        //   } else {
        //     // some other error happened
        //   }
        }
      };


    onBtnREgisterClick = () =>{
            let date = new Date()
            this.setState({loading_btn_register : true})
            let {username, password, email}= this.state
            if(username && password && email){
                
                if(password !== this.state.confirm_password){
                    return alert('Password Tidak sama')
                }
                Axios.post(urlApi + 'auth/register',{
                    username,
                    password,
                    email,
                    created_at : `${date.getDate()}-${date.getMonth()}-${date.getFullYear().toString().slice(-2)} ${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`

                }).then((res) => {
                    
                    console.log(res.data)
                    if(res.data.error){
                        alert(res.data.message)
                    }
                    else{
                        this.props.onRegisterSuccess({email,username})
                        alert(res.data.message)
                        AsyncStorage.setItem('data', JSON.stringify({email, username}), (err)=>{
                            if(err) return alert(err.message)
                            this.props.onRegisterSuccess({email,username})
                            alert(res.data.message)
                        })
                    }
                })
                .catch((err) => {
                    console.log(err)
                })
            }

    }
    componentDidMount(){
        GoogleSignin.configure({
            scopes: ['https://www.googleapis.com/auth/drive.readonly'], // what API you want to access on behalf of the user, default is email and profile
            webClientId: web_client_id, // client ID of type WEB for your server (needed to verify user ID and offline access)
            offlineAccess: true, // if you want to access Google API on behalf of the user FROM YOUR SERVER
            hostedDomain: '', // specifies a hosted domain restriction
            loginHint: '', // [iOS] The user's ID, or email address, to be prefilled in the authentication UI if possible. [See docs here](https://developers.google.com/identity/sign-in/ios/api/interface_g_i_d_sign_in.html#a0a68c7504c31ab0b728432565f6e33fd)
            forceConsentPrompt: true, // [Android] if you want to show the authorization prompt at each login.
            accountName: '', // [Android] specifies an account name on the device that should be used
            // iosClientId: '<FROM DEVELOPER CONSOLE>', // [iOS] optional, if you want to specify the client ID of type iOS (otherwise, it is taken from GoogleService-Info.plist)
          });


        AsyncStorage.getItem('data').then((data) => {
            if(data){
                var obj_data = JSON.parse(data)
                this.props.onRegisterSuccess(obj_data)
                this.setState({check_storage : true})
            }
            this.setState({check_storage : true})
            console.log(obj_data)
        })
        .catch((err) => {

        })
    }

    componentDidUpdate(){
        if(this.props.user){
            const reset_stack = StackActions.reset({
                index : 0,
                actions : [NavigationActions.navigate({routeName:'home'})]
            })
            this.props.navigation.dispatch(reset_stack)
        }
    }

    render() {
        return (
            <View style={{flex:1,justifyContent:'center',paddingHorizontal:20}}>
        <Text style={{alignSelf:'center'}} h1> Papinsta </Text>
        <View style={{marginTop:30}}>
            <Input
                onChangeText = {(text)=>this.setState({username:text})}
                placeholder='username'
                leftIcon={
                    <Icon
                    name='user'
                    size={24}
                    color='black'
                    style={{paddingRight:10}}
                    />
                }
            />
        </View>
        <View style={{marginTop:15}}>
            <Input
                onChangeText = {(email)=>this.setState({email})}
                placeholder='Email'
                leftIcon={
                    <Icon
                    name='envelope'
                    size={24}
                    color='black'
                    style={{paddingRight:10}}
                    />
                }
            />
        </View>

        <View style={{marginTop:15}}>
            <Input
                onChangeText = {(text)=>this.setState({password:text})}
                secureTextEntry={this.state.look}
                placeholder='Password'
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
                    style={{paddingRight:10}}
                    onPress={() => this.setState({look : !this.state.look})}
                    />
                }
            />
        </View>
        <View style={{marginTop:15}}>
            <Input
                 onChangeText = {(text)=>this.setState({confirm_password:text})}
                secureTextEntry={this.state.look}
                placeholder='Confirm Password'
                errorMessage=
                {
                    (this.state.confirm_password !== '') &&(this.state.confirm_password !== this.state.password)
                    ?
                    'password does not match': null
                
                }
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
                    style={{paddingRight:10}}
                    onPress={() => this.setState({look : !this.state.look})}
                    />
                }
            />
        </View>
        
        <View style={{marginTop:30}}>
            <Button
                title='Register'
                loading= {this.state.loading_btn_register}
                onPress={ () => this.onBtnREgisterClick()}
            />
        </View>

        <View style={{flexDirection:'row', marginTop:15}}>
            <View style={{flex:1}}>
                <Button
                    onPress ={()=>this.signIn()}
                     icon={
                        <Icon 
                            name='google'
                            size={25}
                            color='white'
                        />
                    }
                    buttonStyle={{backgroundColor:'red'}}

                />
            </View>
            <View style={{flex:1}}>
                <Button
                    icon={
                        <Icon 
                            name='facebook'
                            size={25}
                            color='white'
                        />
                    }
                    buttonStyle={{backgroundColor:'blue'}}
                />
            </View>
        </View>
        <View style={{flexDirection:'row',justifyContent:'center',marginTop:15}}>
            <Text> Sudah Punya Akun? </Text>
            <Text style={{fontWeight:'bold'}} onPress={()=> this.props.navigation.navigate('login')}>Login</Text>
        </View>
        
      </View>





        )
    }
}

const mapStateToProps = (state) => {
    return{
        user : state.users.username,
        // caption : state.bebas.caption
    }
}


export default connect(mapStateToProps,{onRegisterSuccess})(register)