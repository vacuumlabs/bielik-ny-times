import { renderHook } from '@testing-library/react-hooks'

import { useFetchJSON } from '../http'

const assertResult = (actual, expected) =>
  expect({
    data: actual[0],
    loading: actual[1],
    error: actual[2],
  }).toEqual(expected)

describe('http', () => {
  describe('useFetchJSON', () => {
    // WORKAROUND (little hack to silence console warning)
    // https://github.com/testing-library/react-hooks-testing-library/issues/14
    // https://github.com/testing-library/react-testing-library/issues/281
    const originalError = console.error
    beforeAll(() => {
      console.error = (...args) => {
        if (/Warning.*not wrapped in act/.test(args[0])) {
          return
        }
        originalError.call(console, ...args)
      }
    })
    afterAll(() => {
      console.error = originalError
    })

    it('successfully fetch data', async () => {
      const response = 'some response'
      const fetcher = () =>
        Promise.resolve({ ok: true, json: () => Promise.resolve(response) })
      const render = renderHook(() => useFetchJSON({ url: 'someurl', fetcher }))
      assertResult(render.result.current, {
        data: null,
        loading: true,
        error: null,
      })
      await render.waitForNextUpdate()
      assertResult(render.result.current, {
        data: response,
        loading: false,
        error: null,
      })
    })

    it('fail to fetch data', async () => {
      const error = 'some error'
      const fetcher = () => Promise.reject(error)
      const render = renderHook(() => useFetchJSON({ url: 'someurl', fetcher }))
      assertResult(render.result.current, {
        data: null,
        loading: true,
        error: null,
      })
      await render.waitForNextUpdate()
      assertResult(render.result.current, {
        data: null,
        loading: false,
        error,
      })
    })

    it('should fail if response is not ok', async () => {
      const error = 'some error'
      const fetcher = () =>
        Promise.resolve({ ok: false, json: () => Promise.resolve(error) })
      const render = renderHook(() => useFetchJSON({ url: 'someurl', fetcher }))
      assertResult(render.result.current, {
        data: null,
        loading: true,
        error: null,
      })
      await render.waitForNextUpdate()
      assertResult(render.result.current, {
        data: null,
        loading: false,
        error,
      })
    })
  })
})
