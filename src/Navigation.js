import {
  createStackNavigator,
  createDrawerNavigator,
  createAppContainer,
} from 'react-navigation'
import React from 'react'

import { articleRoutes } from './app/routes'
import ArticleDetailScreen from './screens/ArticleDetailScreen'
import ArticlesScreen from './screens/ArticlesScreen'
import Icon from './components/Icon'
import theme from './app/theme'

const ArticlesNavigator = createStackNavigator(
  {
    [articleRoutes.Articles]: {
      screen: ArticlesScreen,
    },
    [articleRoutes.ArticleDetail]: {
      screen: ArticleDetailScreen,
    },
  },
  {
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: theme.colors.primary,
      },
      headerTitleStyle: {
        color: theme.colors.white,
      },
      headerBackTitleStyle: {
        color: theme.colors.white,
      },
      headerBackImage: (
        <Icon material name="arrow-back" size={35} color={theme.colors.white} />
      ),
    },
  }
)

const Drawer = createDrawerNavigator(
  {
    Articles: {
      screen: ArticlesNavigator,
      navigationOptions: {
        title: 'NY Times Most Popular',
      },
    },
  },
  {
    contentOptions: {
      activeTintColor: theme.colors.primary,
    },
  }
)

export default createAppContainer(Drawer)
