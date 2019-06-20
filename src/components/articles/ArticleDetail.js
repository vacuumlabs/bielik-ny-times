import { Dimensions, StyleSheet, View } from 'react-native'
import React from 'react'

import { FeaturedImage } from '../FeaturedImage'
import { Paragraph, Title } from '../Typography'
import { findArticleImage } from '../../app/utils/articleUtils'
import ArticleMetadata from './ArticleMetadata'
import Hyperlink from '../Hyperlink'
import theme from '../../app/theme'

export default function ArticleDetail({ article }) {
  const { width } = Dimensions.get('window')
  const image = findArticleImage(article, { minWidth: width })
  return (
    <>
      <FeaturedImage image={image} height={220} />
      <View style={styles.content}>
        <Title style={styles.title}>{article.title}</Title>
        <Paragraph style={styles.abstract}>{article.abstract}</Paragraph>
        <View style={styles.readMore}>
          <Paragraph>Read more:</Paragraph>
          <Hyperlink url={article.url}>{article.url}</Hyperlink>
        </View>
        <ArticleMetadata article={article} style={styles.metadata} />
      </View>
    </>
  )
}

const {
  padding: { sm, md },
} = theme

const styles = StyleSheet.create({
  content: {
    padding: sm,
  },
  title: {
    marginTop: sm,
  },
  abstract: {
    marginTop: sm,
  },
  metadata: {
    marginTop: md,
  },
  readMore: {
    marginTop: md,
  },
})
