import { TouchableOpacity } from 'react-native'
import React from 'react'

import Icon from '../Icon'

export default function OpenDrawerButton({ navigation }) {
  return (
    <TouchableOpacity onPress={() => navigation.openDrawer()}>
      <Icon material name="menu" size={35} />
    </TouchableOpacity>
  )
}
