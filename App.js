import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { StyleSheet, TouchableOpacity, Image, View} from "react-native";
import { AppLoading } from "expo";
import * as Font from "expo-font";
import HomeScreen from "./components/Home";
import Category from "./components/Category";
import Detail from "./components/Detail";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

const getFont = async () =>
  Font.loadAsync({
    "roboto-regular": require("./assets/fonts/Roboto-Regular.ttf"),
    "roboto-bold": require("./assets/fonts/Roboto-Bold.ttf"),
    "custom-icons": require("./assets/fonts/IcoMoon-Free.ttf"),
  });

const Stack = createStackNavigator();

const App =()=> {
  const [fontLoaded, setFontLoaded] = useState(false);
  if (fontLoaded) {
    return (
        <NavigationContainer>
          <Stack.Navigator initialRouteName="Home">
            <Stack.Screen name="Home"
             component={HomeScreen}
             options={{
               title:'',
               headerStyle:{
                backgroundColor: '#fff', 
                elevation:0, 
                shadowColor: 'transparent'
               },
               headerLeft:null,
               headerRight:()=>{
                return( <TouchableOpacity style={{marginRight:24}}>
                   <Image resizeMode="contain"  
                   source={require("./assets/icons/bar_menu_icon.png")}
                   style={{height:20,width:20}}
                   />
                 </TouchableOpacity>)
               }
             }}
             />
             <Stack.Screen name="Dashboard" component={Category}
             options={{
              headerStyle:{
               backgroundColor: '#fff', 
               elevation:0, 
               shadowColor: 'transparent'
              }
             }}
             />
             <Stack.Screen name="Details" component={Detail}/>
          </Stack.Navigator>
        </NavigationContainer>
    );
  } else {
    return (
      <AppLoading startAsync={getFont} onFinish={() => setFontLoaded(true)} />
    );
  }
}

export default ()=>{
  return <App />
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});
