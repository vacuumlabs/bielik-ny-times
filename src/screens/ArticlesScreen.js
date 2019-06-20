import React, { Component } from 'react'

import Articles from '../components/articles/Articles'
import OpenDrawerButton from '../components/navigation/OpenDrawerButton'

export default class ArticlesScreen extends Component {
  static navigationOptions = ({ navigation }) => ({
    title: 'NY Times Most Popular',
    headerLeft: <OpenDrawerButton navigation={navigation} />,
  })

  render() {
    const { navigation } = this.props
    return <Articles navigation={navigation} />
  }
}
