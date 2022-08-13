import { combineReducers } from 'redux'

import gallerynews from './gallerynews'
import sportnews from './sportnews'
import technews from './technews'

export default combineReducers({
    gallerynews,
    sportnews,
    technews,
})
