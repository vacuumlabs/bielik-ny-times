import {
  Alert,
  Linking,
  StyleSheet,
  Text,
  TouchableOpacity,
} from 'react-native'
import React from 'react'

import theme from '../app/theme'

export default function Hyperlink({ children, style, url, ...other }) {
  return (
    <TouchableOpacity
      onPress={async () => {
        try {
          const supported = await Linking.canOpenURL(url)
          if (supported) {
            await Linking.openURL(url)
          } else {
            console.log("Can't handle url: " + url)
            Alert.alert("Can't open the link")
          }
        } catch (err) {
          console.warn('An error occurred', err)
          Alert.alert('Error opening the link')
        }
      }}
    >
      <Text style={[styles.text, style]} {...other}>
        {children}
      </Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  text: {
    color: theme.colors.hyperlink,
  },
})
