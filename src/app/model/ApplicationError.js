import { get } from 'lodash'
// helper functions to parse errors

const makeError = message => ({ message })

export const isApplicationError = error => !!error.message

export function parseArticleError(error) {
  if (!error) {
    return null
  }
  const nytRequestError = get(error, 'fault.faultstring')
  if (nytRequestError) {
    // e.g. invalid api key
    return makeError(nytRequestError)
  }
  const nytFormattedError = get(error, 'errors[0]')
  if (nytFormattedError) {
    // e.g. invalid request params
    return makeError(nytFormattedError)
  }
  return makeError('Unexpected error has occured :(')
}
