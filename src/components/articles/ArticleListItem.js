import { StyleSheet, TouchableOpacity, View } from 'react-native'
import React from 'react'

import { ARTICLE_THUMBNAIL_SIZE } from '../../app/model/Article'
import { Paragraph } from '../Typography'
import { Thumbnail } from '../Thumbnail'
import { articleRoutes } from '../../app/routes'
import ArticleMetadata from './ArticleMetadata'
import theme from '../../app/theme'

export function ArticleListItem({ article, navigation }) {
  return (
    <TouchableOpacity
      onPress={() => navigation.navigate(articleRoutes.ArticleDetail, article)}
    >
      <View style={styles.container}>
        <View style={styles.leftContainer}>
          <Thumbnail image={article.thumbnail} size={ARTICLE_THUMBNAIL_SIZE} />
        </View>
        <View style={styles.contentContainer}>
          <Paragraph numberOfLines={2}>{article.title}</Paragraph>
          <ArticleMetadata article={article} />
        </View>
      </View>
    </TouchableOpacity>
  )
}

const {
  padding: { sm },
} = theme

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    paddingTop: sm,
    paddingBottom: sm,
  },
  contentContainer: {
    flex: 1,
    paddingLeft: sm,
    paddingRight: sm,
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
