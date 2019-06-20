import React, { Component } from 'react'

import ArticleDetail from '../components/articles/ArticleDetail'

export default class ArticleDetailScreen extends Component {
  render() {
    const { params } = this.props.navigation.state
    return <ArticleDetail article={params} />
  }
}
