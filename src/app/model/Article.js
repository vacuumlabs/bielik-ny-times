import { Dimensions } from 'react-native'
import { get } from 'lodash'

import { findArticleImage } from '../utils/articleUtils'

/**
 * Module responsible for parsing response of NYT article HTTP response.
 * @see https://developer.nytimes.com/docs/most-popular-product/1/types/ViewedArticle
 */

export const ARTICLE_THUMBNAIL_SIZE = 60
export const ARTICLE_FEATURED_IMAGE_WIDTH = Dimensions.get('window').width

function parseSingleArticle(articleResponse) {
  return {
    id: articleResponse.id,
    title: articleResponse.title,
    abstract: articleResponse.abstract,
    authors: articleResponse.byline,
    published: articleResponse.published_date,
    url: articleResponse.url,
    thumbnail: findArticleImage(articleResponse, {
      minWidth: ARTICLE_THUMBNAIL_SIZE,
    }),
    featuredImage: findArticleImage(articleResponse, {
      minWidth: ARTICLE_FEATURED_IMAGE_WIDTH,
    }),
  }
}

export function parseArticleResponse(response) {
  if (!response) {
    return null
  }
  const results = get(response, 'results', [])
  return results.map(parseSingleArticle)
}
