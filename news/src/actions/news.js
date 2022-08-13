import * as api from '../api/news'


export const Getallnews = () => async (dispatch) => {
    try {
        dispatch({type: 'SHOW_LOADER'})
        const {data} = await api.getallnews();
        dispatch({type: 'GET_ALL_NEWS', payload: data})
        dispatch({type: 'HIDE_LOADER'})
    } catch (error) {
        console.log(error)
        dispatch({type: 'SHOW_ERROR', payload: error})
    }
}

export const Getsportnews = () => async (dispatch) => {
    try {
        dispatch({type: 'SHOW_LOADER'})
        const {data} = await api.getsportnews();
        console.log("data ", data.news)

        dispatch({type: 'GET_SPORT_NEWS', payload: data})
        dispatch({type: 'HIDE_LOADER'})
    } catch (error) {
        console.log(error)
        dispatch({type: 'SHOW_ERROR', payload: error})
    }
}

export const Gettechnews = () => async (dispatch) => {
    try {
        dispatch({type: 'SHOW_LOADER'})
        const {data} = await api.gettechnews();
        dispatch({type: 'GET_TECH_NEWS', payload: data})
        dispatch({type: 'HIDE_LOADER'})
    } catch (error) {
        console.log(error)
        dispatch({type: 'SHOW_ERROR', payload: error})
    }
}

export const Getgallerynews = () => async (dispatch) => {
    try {
        dispatch({type: 'SHOW_LOADER'})
        const {data} = await api.getgallerynews();
        dispatch({type: 'GET_GALLERY_NEWS', payload: data})
        dispatch({type: 'HIDE_LOADER'})
    } catch (error) {
        console.log(error)
        dispatch({type: 'SHOW_ERROR', payload: error})
    }
}
