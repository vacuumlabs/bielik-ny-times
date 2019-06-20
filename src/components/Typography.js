import { StyleSheet, Text } from 'react-native'
import React from 'react'

import theme from '../app/theme'

export const SecondaryText = props => (
  <Text {...props} style={[props.style, styles.secondaryText]} />
)

export const Paragraph = props => (
  <Text {...props} style={[props.style, styles.paragraph]} />
)

export const Title = props => (
  <Text {...props} style={[props.style, styles.title]} />
)

const styles = StyleSheet.create({
  secondaryText: {
    color: theme.colors.secondaryText,
  },
  paragraph: {
    color: theme.colors.text,
  },
  title: {
    color: theme.colors.text,
    fontSize: theme.fonts.size.title,
    fontWeight: 'bold',
  },
})
