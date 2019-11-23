import React, { Component } from 'react'
import { Text, View } from 'react-native'
import LoginPage from './src/screens/login'
import RegisterPage from './src/screens/register'
import HomePage from './src/screens/home'
import MainStack from './src/routers/login_register_home'
import { Provider} from 'react-redux' 
import { createStore} from 'redux'
import Reducers from './src/redux/reducers/index'

const store = createStore(Reducers)
export default class App extends Component {
  render() {
    return (
      <Provider store = {store}>
        <MainStack/>
      </Provider>
    )
  }
}
