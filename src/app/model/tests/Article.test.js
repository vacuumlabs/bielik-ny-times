import {
  ARTICLE_FEATURED_IMAGE_WIDTH,
  ARTICLE_THUMBNAIL_SIZE,
  parseArticleResponse,
} from '../Article'

describe('Article', () => {
  describe('parseArticleResponse', () => {
    const makeArticleResponse = num => ({
      id: num,
      title: `title${num}`,
      abstract: `abstract${num}`,
      byline: `author${num}`,
      published_date: '2019-01-01',
      url: `url${num}`,
      media: [
        {
          type: 'image',
          'media-metadata': [
            {
              url: `url1`,
              width: ARTICLE_THUMBNAIL_SIZE,
              height: ARTICLE_THUMBNAIL_SIZE,
            },
            {
              url: `url2`,
              width: ARTICLE_FEATURED_IMAGE_WIDTH,
              height: ARTICLE_FEATURED_IMAGE_WIDTH,
            },
          ],
        },
      ],
    })
    it('should format response to custom object', () => {
      const response = {
        status: 'OK',
        copyright: 'copy',
        num_results: 2,
        results: [makeArticleResponse(1), makeArticleResponse(2)],
      }
      const actual = parseArticleResponse(response)
      expect(actual).toMatchSnapshot()
    })
  })
})
