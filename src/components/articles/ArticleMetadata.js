import { StyleSheet, View } from 'react-native'
import React from 'react'

import { SecondaryText } from '../Typography'
import Icon from '../Icon'
import theme from '../../app/theme'

const CalendarIcon = () => (
  <Icon
    materialCommunity
    name="calendar"
    size={theme.icon.sm}
    color="gray"
    style={{ marginRight: 3 }}
  />
)

const ArticleMetadata = ({ article, style }) => (
  <View style={[styles.container, style]}>
    <View style={styles.authors}>
      <SecondaryText>{article.byline}</SecondaryText>
    </View>
    <View style={styles.date}>
      <CalendarIcon />
      <SecondaryText>{article.published_date}</SecondaryText>
    </View>
  </View>
)

const {
  padding: { sm },
} = theme

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    marginTop: sm / 2,
  },
  date: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  authors: {
    flex: 1,
  },
})

export default ArticleMetadata
