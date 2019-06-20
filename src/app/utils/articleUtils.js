import { parseArticleImage } from '../model/Image'

const sortByWidthAsc = (a, b) => a.width - b.width

/**
 * Searches for an article image, with appropriate size.
 * @param {ViewedArticle} articleResponse article response object
 * @see https://developer.nytimes.com/docs/most-popular-product/1/types/ViewedArticle
 */
export function findArticleImage(articleResponse = {}, { minWidth = 0 } = {}) {
  if (!articleResponse) {
    return null
  }
  const { media = [] } = articleResponse
  const firstImage = media.find(m => m.type === 'image')
  if (!firstImage) {
    return null
  }
  const images = firstImage['media-metadata'].slice()
  images.sort(sortByWidthAsc)
  const bestImage = images.find(image => image.width >= minWidth)
  if (bestImage) {
    return parseArticleImage(bestImage)
  }
  const largestImage = images[images.length - 1]
  return parseArticleImage(largestImage)
}
