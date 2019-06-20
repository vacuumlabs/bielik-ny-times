import { useEffect, useState } from 'react'

/** Hook that fetches data and parse response to object literal */
export function useFetchJSON({ url, options, fetcher = fetch }) {
  const [state, setState] = useState({
    data: null,
    loading: true,
    error: null,
  })
  const [version, setVersion] = useState(0)
  const refresh = () => setVersion(version + 1) // refetch data
  useEffect(() => {
    setState({
      data: state.data,
      loading: true,
      error: null,
    })
    fetcher(url, options)
      .then(response =>
        response.json().then(data => {
          if (!response.ok) {
            // bad status code - throw data as an error
            throw data
          }
          return data
        })
      )
      .then(data =>
        // fetch succeeded
        setState({
          data,
          loading: false,
          error: null,
        })
      )
      .catch(error => {
        // fetch failed
        console.warn('request failed', error)
        setState({
          data: null,
          loading: false,
          error,
        })
      })
  }, [version])
  return [state.data, state.loading, state.error, { refresh }]
}
