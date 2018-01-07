import { combineReducers } from 'redux'
import showsReducer from './showsReducers'
import dataReducer from './dataReducer'
import homeReducer from './homeReducer'

export default combineReducers({
    data: dataReducer,
    shows: showsReducer,
    home: homeReducer
})