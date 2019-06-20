import { StyleSheet, Text } from 'react-native'
import React from 'react'

export const SecondaryText = props => (
  <Text {...props} style={[props.style, styles.meta]} />
)

export const Paragraph = props => (
  <Text {...props} style={[props.style, styles.paragraph]} />
)

export const Title = props => (
  <Text {...props} style={[props.style, styles.title]} />
)

const styles = StyleSheet.create({
  meta: {
    color: 'gray',
  },
  paragraph: {
    color: 'black',
  },
  title: {
    color: 'black',
    fontSize: 20,
    fontWeight: 'bold',
  },
})
