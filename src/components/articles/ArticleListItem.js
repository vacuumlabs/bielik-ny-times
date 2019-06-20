import { StyleSheet, TouchableOpacity, View } from 'react-native'
import React from 'react'

import { Paragraph } from '../Typography'
import { Thumbnail } from '../Thumbnail'
import { articleRoutes } from '../../app/routes'
import { findArticleImage } from '../../app/utils/articleUtils'
import ArticleMetadata from './ArticleMetadata'

const THUMBNAIL_SIZE = 60

export function ArticleListItem({ article, navigation }) {
  const image = findArticleImage(article, { minWidth: THUMBNAIL_SIZE })
  return (
    <TouchableOpacity
      onPress={() => navigation.navigate(articleRoutes.ArticleDetail, article)}
    >
      <View style={styles.container}>
        <View style={styles.leftContainer}>
          <Thumbnail image={image} size={THUMBNAIL_SIZE} />
        </View>
        <View style={styles.contentContainer}>
          <Paragraph numberOfLines={2}>{article.title}</Paragraph>
          <ArticleMetadata article={article} />
        </View>
      </View>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    paddingTop: 10,
    paddingBottom: 10,
  },
  contentContainer: {
    flex: 1,
    paddingLeft: 10,
    paddingRight: 10,
  },
  leftContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    width: 70,
  },
  rightContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    width: 50,
  },
})
