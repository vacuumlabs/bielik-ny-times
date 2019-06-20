import { findArticleImage } from '../articleUtils'

describe('articleUtils', () => {
  const article = {
    media: [
      {
        type: 'sometype',
      },
      {
        type: 'image',
        'media-metadata': [
          { url: 'a', width: 10 },
          { url: 'b', width: 20 },
          { url: 'c', width: 30 },
        ],
      },
    ],
  }
  describe('findArticleImage', () => {
    it('should not fail on empty article', () =>
      expect(findArticleImage(null)).toBe(null))

    it('should not fail when missing media', () =>
      expect(findArticleImage({})).toBe(null))

    it('should not on empty media', () =>
      expect(findArticleImage({ media: [] })).toBe(null))

    it('should find smallest image', () =>
      expect(findArticleImage(article).width).toBe(10))

    it('should find image with exact width', () =>
      expect(findArticleImage(article, { minWidth: 20 }).width).toBe(20))

    it('should find larger image', () =>
      expect(findArticleImage(article, { minWidth: 25 }).width).toBe(30))

    it('should find the largest image', () =>
      expect(findArticleImage(article, { minWidth: 100 }).width).toBe(30))
  })
})
