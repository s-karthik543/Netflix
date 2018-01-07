import {
    FETCH_HOME_DATA,
    HOME_LOADER,
    MENU_SELECTED
} from '../constants'


export const fetchHomeData = () => {

    return (dispatch) => {
        dispatch(setLoader(true))
        fetch("http://192.168.0.102:8010/home")
            .then((response) => response.json())
            .then((data) => {
                dispatch({
                    type: FETCH_HOME_DATA,
                    data
                })
                dispatch(setLoader(false))
            })
    }
}

export const setLoader = (isLoading) => {
    return {
        type: HOME_LOADER,
        isLoading
    }
}

export const onMenuselected=(menuItem)=>{
    return{
        type:MENU_SELECTED,
        payload:menuItem
    }
}