import React from 'react'
import{View,TouchableOpacity,StyleSheet} from 'react-native'   
import { createSwitchNavigator, createAppContainer } from "react-navigation";
import DetailsScreen from './screens/DetailScreen' 
import HomeScreen from './screens/HomeScreen'  

export default class App extends React.Component{

    render(){
        return(
            <View style={{flex:1}}>
               <AppContainer/>
                </View>
        )
    }
}

const AppNavigator= createSwitchNavigator({
  screen1:DetailsScreen,
  screen2:HomeScreen
})

const AppContainer= createAppContainer(AppNavigator)
