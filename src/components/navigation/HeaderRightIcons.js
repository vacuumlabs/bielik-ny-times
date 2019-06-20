import { Alert, StyleSheet, TouchableOpacity, View } from 'react-native'
import React from 'react'

import Icon from '../Icon'
import theme from '../../app/theme'

const alertNotImplemented = () => Alert.alert('Coming soon... :)')

export default function HeaderRightIcons() {
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={alertNotImplemented}>
        <Icon
          material
          name="search"
          size={theme.icon.md}
          color={theme.colors.white}
        />
      </TouchableOpacity>
      <TouchableOpacity onPress={alertNotImplemented}>
        <Icon
          materialCommunity
          name="dots-vertical"
          size={theme.icon.md}
          color={theme.colors.white}
        />
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    width: 70,
    justifyContent: 'space-between',
  },
})
