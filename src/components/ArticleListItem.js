import { Text, TouchableOpacity } from 'react-native'
import React from 'react'

import { articleRoutes } from '../app/routes'

export function ArticleListItem({ item, navigation }) {
  return (
    <TouchableOpacity
      onPress={() => navigation.navigate(articleRoutes.ArticleDetail, item)}
    >
      <Text>{item.abstract}</Text>
    </TouchableOpacity>
  )
}
