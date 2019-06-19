import React, { Component } from 'react'

import ArticleDetail from '../containers/ArticleDetail'

export default class ArticleDetailScreen extends Component {
  render() {
    const { params } = this.props.navigation.state
    return <ArticleDetail article={params} />
  }
}
