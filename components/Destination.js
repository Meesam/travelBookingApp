import React from 'react'
import { StyleSheet, Text, View, ScrollView, Image, TouchableOpacity } from 'react-native'
import { useNavigation } from '@react-navigation/native';

const Destination = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.destinationContainer}>
      <View>
        <Text style={styles.heading}>Destination</Text>
        <ScrollView horizontal={true} showHorizontalScrollIndicator={false}>
          <TouchableOpacity onPress={()=>navigation.navigate("Details")} style={{...styles.item, marginLeft:0}}>
             <Image style={{height:150,width:100, borderRadius:15}} resizeMode="cover" source={require('../assets/images/frozen_hills.jpg')}/>
           <Text style={{color: 'grey'}}>Hill</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={()=>navigation.navigate("Details")} style={styles.item}>
             <Image style={{height:150,width:100, borderRadius:15}} resizeMode="cover" source={require('../assets/images/beach.jpeg')}/>
             <Text style={{color: 'grey'}}>Beach</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={()=>navigation.navigate("Details")} style={styles.item}>
             <Image style={{height:150,width:100, borderRadius:15}} resizeMode="cover" source={require('../assets/images/ski_villa.jpg')}/>
             <Text style={{color: 'grey'}}>Villa</Text>
          </TouchableOpacity>
        </ScrollView>
      </View>
    </View>
  )
}

export default Destination

const styles = StyleSheet.create({
  destinationContainer:{
    flex: 1, marginTop:5, justifyContent: 'center', alignItems: 'center', marginLeft:15
  },
  heading:{
    fontSize:14, fontWeight: '800', marginBottom:6
  },
  item:{
    flex:1, alignItems: 'center', marginHorizontal:10
  }
})
