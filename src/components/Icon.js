import React from 'react'

import { MaterialIcons, MaterialCommunityIcons } from '@expo/vector-icons'

/** Icon component adapter (in order to isolate expo's dependency) */
export default function Icon({ material, materialCommunity, ...iconProps }) {
  if (material) {
    return <MaterialIcons {...iconProps} />
  }
  if (materialCommunity) {
    return <MaterialCommunityIcons {...iconProps} />
  }
  return null
}
