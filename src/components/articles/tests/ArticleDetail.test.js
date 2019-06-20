import React from 'react'

import { renderToJSON } from '../../../app/utils/testUtils'
import ArticleDetail from '../ArticleDetail'

const withoutImage = {
  id: 1,
  title: 'a',
  byline: 'author1',
  published_date: '2019-01-01',
  abstract: 'text text',
}

const withImage = {
  ...withoutImage,
  media: [
    {
      type: 'image',
      'media-metadata': [{ url: 'a', width: 10 }],
    },
  ],
}

describe('ArticleDetail', () => {
  it('should not fail to render article without image', () => {
    renderToJSON(<ArticleDetail article={withoutImage} />)
  })

  it('should not fail to render article with image', () => {
    renderToJSON(<ArticleDetail article={withImage} />)
  })
})
