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
        height: 65,
      },
      headerTitleStyle: {
        color: theme.colors.white,
        marginLeft: 0,
      },
      headerBackTitleStyle: {
        color: theme.colors.white,
      },
      headerBackImage: (
        <Icon
          material
          name="arrow-back"
          size={theme.icon.md}
          color={theme.colors.white}
        />
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
