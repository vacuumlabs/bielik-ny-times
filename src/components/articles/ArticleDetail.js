import { Dimensions, StyleSheet, View } from 'react-native'
import React from 'react'

import { FeaturedImage } from '../FeaturedImage'
import { Paragraph, Title } from '../Typography'
import { findArticleImage } from '../../app/utils/articleUtils'
import ArticleMetadata from './ArticleMetadata'
import Hyperlink from '../Hyperlink'

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

const styles = StyleSheet.create({
  content: {
    padding: 10,
  },
  title: {
    marginTop: 10,
  },
  abstract: {
    marginTop: 10,
  },
  metadata: {
    marginTop: 20,
  },
  readMore: {
    marginTop: 20,
  },
})
