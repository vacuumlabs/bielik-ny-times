import React from 'react'

import { renderToJSON } from '../../../app/utils/testUtils'
import ArticleList from '../ArticleList'

const articles = [
  { id: 1, title: 'a', byline: 'author1', published_date: '2019-01-01' },
  { id: 2, title: 'b', byline: 'author2', published_date: '2019-01-01' },
  { id: 3, title: 'c', byline: 'author3', published_date: '2019-01-01' },
]

describe('ArticleList', () => {
  it('should not fail to render empty list', () => {
    renderToJSON(
      <ArticleList articles={[]} refreshing={false} refresh={jest.fn} />
    )
  })

  it('should not fail to render some articles', () => {
    renderToJSON(
      <ArticleList articles={articles} refreshing={false} refresh={jest.fn} />
    )
  })
})
