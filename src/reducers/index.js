import { combineReducers } from 'redux'
import showsReducer from './showsReducers'

export default combineReducers({
    shows:showsReducer
})