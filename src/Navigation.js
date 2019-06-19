import {
  createStackNavigator,
  createDrawerNavigator,
  createAppContainer,
} from 'react-navigation'

import { articleRoutes } from './app/routes'
import ArticleDetailScreen from './screens/ArticleDetailScreen'
import ArticlesScreen from './screens/ArticlesScreen'

const ArticlesNavigator = createStackNavigator({
  [articleRoutes.Articles]: {
    screen: ArticlesScreen,
  },
  [articleRoutes.ArticleDetail]: {
    screen: ArticleDetailScreen,
  },
})

const Drawer = createDrawerNavigator({
  Articles: {
    screen: ArticlesNavigator,
    navigationOptions: {
      title: 'NY Times Most Popular',
    },
  },
})

export default createAppContainer(Drawer)
