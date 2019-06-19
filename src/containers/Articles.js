import { FlatList, StyleSheet, Text, View } from 'react-native'
import React from 'react'

import { ArticleListItem } from '../components/ArticleListItem'
import { useMostViewedArticles } from '../app/api'

export default function Articles({ navigation }) {
  const [data, loading, error] = useMostViewedArticles(7)
  if (loading) {
    return <Text>Loading</Text>
  }
  if (error) {
    return <Text>Error occured :(</Text>
  }
  return (
    <View style={styles.container}>
      <FlatList
        data={data.results}
        keyExtractor={item => `${item.id}`}
        renderItem={({ item }) => (
          <ArticleListItem item={item} navigation={navigation} />
        )}
      />
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
