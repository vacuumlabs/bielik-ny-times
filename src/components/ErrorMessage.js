import { StyleSheet, Text } from 'react-native'
import React from 'react'

import { isApplicationError } from '../app/model/ApplicationError'
import theme from '../app/theme'

const TextError = ({ children }) => (
  <Text style={styles.error}>Error: {children}</Text>
)

/**
 * Component that can display various types of errors
 */
export default function ErrorMessage({
  error, // ApplicationError
}) {
  if (!error) {
    return null
  }
  if (isApplicationError(error)) {
    return <TextError>{error.message}</TextError>
  }
  return <TextError>Unexpected error occured :(</TextError>
}

const styles = StyleSheet.create({
  error: {
    color: theme.colors.danger,
  },
})
