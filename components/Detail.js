import React from 'react'
import { StyleSheet, Text, View, Image } from 'react-native'
import { LinearGradient } from "expo-linear-gradient"
import Card from './Card'

const Detail = () => {
  return (
    <View style={styles.detailContainer}>
      <View style={{flex: 2}}>
        <Image resizeMode="cover" style={{height:'80%',width:'100%'}} source={require('../assets/images/ski_villa_banner.jpg')}/>
        <Card style={[styles.card,styles.shadow]} shadow={styles.shadow}/>
      </View>
      <View style={{flex: 1.5}}>
        <View style={{flexDirection:'row', justifyContent: 'space-around'}}>
         <View style={{justifyContent:'center',alignItems:'center'}}>
          <Image style={{height:50,width:50}} resizeMode="cover" source={require('../assets/icons/villa_icon.png')}/>
          <Text style={{fontSize:13,marginTop:5}}>Villa</Text>
         </View>
         <View style={{justifyContent:'center',alignItems:'center'}}>
          <Image style={{height:50,width:50}} resizeMode="cover" source={require('../assets/icons/parking_icon.png')}/>
          <Text style={{fontSize:13,marginTop:5}}>Parking</Text>
         </View>
         <View style={{justifyContent:'center',alignItems:'center'}}>
         <Image style={{height:50,width:50}} resizeMode="cover" source={require('../assets/icons/wind_icon.png')}/>
          <Text style={{fontSize:13,marginTop:5}}>4C</Text>
         </View>     
        </View>
        <View style={{marginLeft:20, marginTop:20}}>
         <Text style={{fontSize:15,fontWeight:'600', marginBottom:10}}>About</Text>
         <Text style={{color: 'grey',textAlign:'left'}}>
           It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.
         </Text>
        </View>
      </View>
      <View style={{flex: 0.5,paddingHorizontal:20}}>
        <LinearGradient
          colors={["#edf0fc", "#d6dfff"]}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 0 }}
          style={{height:70,width:'100%',borderRadius:15}}
        >
        <View style={{flex:1, flexDirection:'row',alignItems: 'center'}}>
          <View style={{flex:1,marginHorizontal:10,justifyContent:'center'}}>
            <Text style={{fontSize:20,fontWeight:'600'}}>$1000</Text>
          </View>
           
          <View style={{width:130,height:'80%',marginHorizontal:10}}>
            <LinearGradient
            colors={["#46aeff", "#5884ff"]}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 0 }}
            style={{flex:1,alignItems:"center", justifyContent:"center",borderRadius:10}}
            >
               <Text style={{fontSize:18,fontWeight:'600',color: 'white'}}>BOOKING</Text>
            </LinearGradient>
          </View>
        </View>
        </LinearGradient>
      </View>
    </View>
  )
}

export default Detail

const styles = StyleSheet.create({
  detailContainer: {
    flex: 1,
    backgroundColor: 'white'
  },
  card:{
    position:'absolute',
    backgroundColor: 'white',
    borderRadius:15,
    left:'5%',
    bottom:'5%',
    right:'5%',
    padding:20
  },
  shadow:{
    shadowColor:'#ccc',
    shadowOpacity:0.5,
    shadowRadius:3.84,
    elevation:5, 
    shadowOffset:{
      width:0,
      height:2
    }
  }
})
