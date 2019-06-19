import { TouchableOpacity } from 'react-native'
import React from 'react'

import { MaterialIcons } from '@expo/vector-icons'

export default function OpenDrawerButton({ navigation }) {
  return (
    <TouchableOpacity onPress={() => navigation.openDrawer()}>
      <MaterialIcons name="menu" size={35} />
    </TouchableOpacity>
  )
}
