import { parseArticleError } from '../ApplicationError'

describe('ApplicationError', () => {
  it('should not return if missing', () =>
    expect(parseArticleError(undefined)).toMatchSnapshot())

  it('should return NYT request error', () =>
    expect(
      parseArticleError({ fault: { faultstring: 'hello error' } })
    ).toMatchSnapshot())

  it('should return NYT formatted error', () =>
    expect(
      parseArticleError({ errors: ['hello error', 'other'] })
    ).toMatchSnapshot())

  it('should return unknown error', () =>
    expect(parseArticleError({ msg: 'something' })).toMatchSnapshot())
})
