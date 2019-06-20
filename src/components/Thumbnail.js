import { Image } from 'react-native'
import React from 'react'

export function Thumbnail({ image, size }) {
  if (!image) {
    // TODO: blank image
    return null
  }
  return (
    <Image
      style={{ width: size, height: size, borderRadius: size / 2 }}
      source={{ uri: image.url }}
    />
  )
}
