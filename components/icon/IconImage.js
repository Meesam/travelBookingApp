import React from 'react'
import { Image } from 'react-native'

const IconImage = ({source}) => {
  return (
    <Image 
    fadeDuration={0}
    style={{width: 30, height: 30,tintColor:'#fff'}}
    resizeMode="cover" 
    source={source} />
  )
}

export default IconImage

