import {createStackNavigator} from 'react-navigation-stack'
import {createAppContainer} from 'react-navigation'
import LoginPage from './../screens/login'
import RegisterPAge from './../screens/register'
import HomeTab from './../routers/home_explore_profile_post'

const mainStack= createAppContainer( createStackNavigator(
   
    {
       login : LoginPage,
       register : RegisterPAge,
       home : HomeTab
     

   },
   {
       initialRouteName: 'register',
       headerMode: 'none'
   }
    

))

export default mainStack