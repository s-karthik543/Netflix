import { combineReducers } from 'redux'
import showsReducer from './showsReducers'
import dataReducer from './dataReducer'

export default combineReducers({
    data: dataReducer,
    shows:showsReducer
})