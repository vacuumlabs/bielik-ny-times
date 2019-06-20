import { StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'

import Icon from '../Icon'
import theme from '../../app/theme'

export default function OpenDrawerButton({ navigation }) {
  return (
    <TouchableOpacity
      onPress={() => navigation.openDrawer()}
      style={styles.container}
    >
      <Icon
        material
        name="menu"
        size={theme.icon.md}
        color={theme.colors.white}
      />
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  container: {
    marginLeft: 10,
  },
})
