import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import IconImage from "./icon/IconImage";

const IconView = ({source,bgColor, lable}) => {
  return (
    <TouchableOpacity style={{flex:1, alignItems: 'center', justifyContent: 'center'}}>
      <View style={[{height:60,width:60,...styles.shadow}]}>
        <LinearGradient
          colors={bgColor}
          start={{ x: 0, y: 0 }}
          end={{ x: 0, y: 1 }}
          style={styles.linear}
        >
        <IconImage source={source} />
        </LinearGradient>
      </View>
      <Text style={{justifyContent: 'center', alignItems: 'center', marginVertical:10, color:'grey'}}>{lable}</Text>
    </TouchableOpacity>
    )
}

export default IconView

const styles = StyleSheet.create({
  container: {
    height:60,
    width:60
  },
  linear: {
    flex: 1,
    alignItems: "center", 
    justifyContent: "center", 
    borderRadius:15,
  },
  shadow:{
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius:3.84,
    elevation:5
  }
})
