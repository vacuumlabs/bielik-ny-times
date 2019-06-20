import qs from 'qs'

import { parseArticleError } from './model/ApplicationError'
import { parseArticleResponse } from './model/Article'
import { useFetchJSON } from './http'
import config from './config'

const baseUrl = 'https://api.nytimes.com'
const baseParams = {
  'api-key': config.API_KEY,
}

function makeUrl(resource, params) {
  const urlParams = qs.stringify({
    ...baseParams,
    ...params,
  })
  return baseUrl + resource + '?' + urlParams
}

/**
 * Fetches latest most viewed articles for given period.
 * @param {number} daysPeriod - n.o. days how far back to fetch data
 * @return {result} hook result of useFetchJSON with formatted article data
 * @see Article.js
 */
export function useMostViewedArticles(daysPeriod) {
  return useFetchJSON({
    url: makeUrl(`/svc/mostpopular/v2/viewed/${daysPeriod}.json`),
    parseResponse: parseArticleResponse,
    parseError: parseArticleError,
  })
}
