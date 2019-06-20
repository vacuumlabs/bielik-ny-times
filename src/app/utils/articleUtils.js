const sortByWidthAsc = (a, b) => a.width - b.width

/**
 * Searches for an article image, with appropriate size.
 * @param {ViewedArticle} article article response object
 * @see https://developer.nytimes.com/docs/most-popular-product/1/types/ViewedArticle
 */
export function findArticleImage(article = {}, { minWidth = 0 } = {}) {
  if (!article) {
    return null
  }
  const { media = [] } = article
  const firstImage = media.find(m => m.type === 'image')
  if (!firstImage) {
    return null
  }
  const images = firstImage['media-metadata'].slice()
  images.sort(sortByWidthAsc)
  const bestImage = images.find(image => image.width >= minWidth)
  if (bestImage) {
    return bestImage
  }
  const largestImage = images[images.length - 1]
  return largestImage
}
