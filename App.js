import React from 'react';
import { Text,View,StyleSheet,Image,TextInput,TouchableOpacity} from 'react-native';
import { createAppContainer } from "react-navigation";
import { createBottomTabNavigator } from "react-navigation-tabs";
import ReadStory from './screens/ReadStoryScreen';
import WriteStory from './screens/WriteStoryScreen';

export default class App extends React.Component {
  render(){
    return (
      
        <AppContainer />
      
    );
  }
}

const TabNavigator = createBottomTabNavigator({
  'Write A Story': {screen: WriteStory},
  'Read A Story': {screen: ReadStory}, 
},
{
  defaultNavigationOptions: ({navigation})=>({
    tabBarIcon: ()=>{
      const routeName = navigation.state.routeName;
      console.log(routeName)
      if(routeName === "Read A Story"){
        return(
          <Image
          source={require("./assets/read.png")}
          style={{width:40, height:40}}
        />
        )
        
      }
      else if(routeName === "Write A Story"){
        return(
          <Image
          source={require("./assets/write.png")}
          style={{width:40, height:40, borderRadius: 5,}}
          
        />)       
      }
    }
  })
}
);

const AppContainer =  createAppContainer(TabNavigator);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  
  },
})
