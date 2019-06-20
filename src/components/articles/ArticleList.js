import { FlatList, StyleSheet, View } from 'react-native'
import React from 'react'

import { ArticleListItem } from './ArticleListItem'

export default function ArticleList({
  articles,
  navigation,
  refreshing,
  refresh,
}) {
  return (
    <View style={styles.container}>
      <FlatList
        refreshing={refreshing}
        onRefresh={refresh}
        data={articles}
        keyExtractor={item => `${item.id}`}
        renderItem={({ item }) => (
          <ArticleListItem article={item} navigation={navigation} />
        )}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
})
