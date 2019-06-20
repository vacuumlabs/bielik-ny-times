import React from 'react'

import { useMostViewedArticles } from '../../app/api'
import ArticleList from './ArticleList'
import ErrorMessage from '../ErrorMessage'

export default function Articles({ navigation }) {
  const [articles = [], loading, error, { refresh }] = useMostViewedArticles(7)
  return (
    <>
      <ErrorMessage error={error} />
      <ArticleList
        articles={articles}
        navigation={navigation}
        refreshing={loading}
        refresh={refresh}
      />
    </>
  )
}
