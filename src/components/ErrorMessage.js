import { StyleSheet, Text } from 'react-native'
import { isString, get } from 'lodash'
import React from 'react'

import theme from '../app/theme'

const TextError = ({ children }) => (
  <Text style={styles.error}>Error: {children}</Text>
)

/**
 * Component that can display various types of errors
 */
export default function ErrorMessage({ error }) {
  if (isString(error)) {
    return <TextError>{error}</TextError>
  }
  const nytRequestError = get(error, 'fault.faultstring')
  if (nytRequestError) {
    // e.g. invalid api key
    return <TextError>{nytRequestError}</TextError>
  }
  const nytFormattedError = get(error, 'errors[0]')
  if (nytFormattedError) {
    // e.g. invalid request params
    return <TextError>{nytFormattedError}</TextError>
  }
  return <TextError>Unexpected error occured :(</TextError>
}

const styles = StyleSheet.create({
  error: {
    color: theme.colors.danger,
  },
})
