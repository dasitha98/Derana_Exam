import { combineReducers } from 'redux'
import dashboard from './dashboard'
import auth from './auth'
import category from './category'
import news from './news'
import token from './token'

export default combineReducers({
    category,
    dashboard,
    auth,
    news,
    token,
})
