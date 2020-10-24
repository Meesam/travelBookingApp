import React from 'react'
import { StyleSheet, Text, View, Image } from 'react-native'

const Card = ({style,shadow}) => {
  return (
    <View style={style}>
          <View style={{flexDirection:'row'}}>
            <View style={shadow}>
              <Image resizeMode="cover" style={{height:70,width:70,borderRadius:15}} source={require('../assets/images/ski_villa.jpg')}/>
            </View>
            <View style={{justifyContent: 'space-around', marginHorizontal:10}}>
               <Text style={{fontSize:15,fontWeight:'600'}}>Ski Villa</Text>
               <Text style={{fontSize:12,color: 'grey'}}>France</Text>
               <View style={{flexDirection:'row'}}>
                 <Image style={{height:20,width:20}} resizeMode="cover" source={require('../assets/icons/star_full.png')}/>
                 <Image style={{height:20,width:20}} resizeMode="cover" source={require('../assets/icons/star_full.png')}/>
                 <Image style={{height:20,width:20}} resizeMode="cover" source={require('../assets/icons/star_full.png')}/>
                 <Image style={{height:20,width:20}} resizeMode="cover" source={require('../assets/icons/star_full.png')}/>
                 <Image style={{height:20,width:20}} resizeMode="cover" source={require('../assets/icons/star_half.png')}/>
                 <Text style={{fontSize:12,color: 'grey',marginHorizontal:5, marginVertical:3}}>4.5</Text>
               </View>
            </View>
          </View>
    </View>
  )
}

export default Card

const styles = StyleSheet.create({})
