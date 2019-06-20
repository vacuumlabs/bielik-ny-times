import { Image, View } from 'react-native'
import React from 'react'

export function FeaturedImage({ image, height }) {
  if (!image) {
    return null
  }
  return (
    <View style={{ height }}>
      <Image
        style={{ flex: 1 }}
        source={{
          width: image.width,
          height: image.height,
          uri: image.url,
        }}
        resizeMode="cover"
      />
    </View>
  )
}
