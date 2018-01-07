import {
    FETCH_HOME_DATA,
    HOME_LOADER,
    MENU_SELECTED
} from '../constants'

const INITIAL_STATA = {
    isLoading: false,
    homeData: [],
    menu: "Home"
}

export default (state = INITIAL_STATA, action) => {
    switch (action.type) {
        case HOME_LOADER:
            return { ...state, isLoading: action.isLoading }
        case FETCH_HOME_DATA:
            return { ...state, homeData: action.data }
        case MENU_SELECTED:
            return { ...state, menu: action.payload }
        default:
            return state
    }
}