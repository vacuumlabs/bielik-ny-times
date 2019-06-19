import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

import { useMostViewedArticles } from './app/api'

export default function AppRoot() {
  const [data, loading, error] = useMostViewedArticles(1)
  if (loading) {
    return <Text>Loading</Text>
  }
  if (error) {
    return <Text>Error occured :(</Text>
  }
  return (
    <View style={styles.container}>
      <Text>Found {data.results.length} articles</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
})
