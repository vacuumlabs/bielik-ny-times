import { useEffect, useState } from 'react'

/** Hook that fetches data and parse response to object literal */
export function useFetchJSON({ url, options }) {
  const [state, setState] = useState({
    data: null,
    loading: true,
    error: null,
  })
  useEffect(() => {
    fetch(url, options)
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
      .catch(error =>
        // fetch failed
        setState({
          data: null,
          loading: false,
          error,
        })
      )
  }, [])
  return [state.data, state.loading, state.error]
}
