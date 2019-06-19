import qs from 'qs'

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
 * @return {response} object with keys:
 *   - results - array of ViewedArticle
 *   - status
 *   - copyright
 *   - num_results
 * @see https://developer.nytimes.com/docs/most-popular-product/1/types/ViewedArticle
 */
export function useMostViewedArticles(daysPeriod) {
  return useFetchJSON({
    url: makeUrl(`/svc/mostpopular/v2/viewed/${daysPeriod}.json`),
  })
}
