import * as api from '../api/dashboard'

export const Totalorders = () => async (dispatch) => {
    try {
        dispatch({type: 'SHOW_LOADER'})
        const {data} = await api.totalorders();
        // console.log("Totalorders",data)
        dispatch({type: 'ORDERS', payload: data})
        dispatch({type: 'HIDE_LOADER'})
    } catch (error) {
        console.log(error)
        dispatch({type: 'SHOW_ERROR', payload: error})
    }
}

export const Totalsales = () => async (dispatch) => {
    try {
        dispatch({type: 'SHOW_LOADER'})
        const {data} = await api.totalsales();
        // console.log("Totalsales",data)
        dispatch({type: 'ORDERS', payload: data})
        dispatch({type: 'HIDE_LOADER'})
    } catch (error) {
        console.log(error)
        dispatch({type: 'SHOW_ERROR', payload: error})
    }
}

export const Averageorders = () => async (dispatch) => {
    try {
        dispatch({type: 'SHOW_LOADER'})
        const {data} = await api.averageOrder();
        // console.log("Averageorders",data)
        dispatch({type: 'ORDERS', payload: data})
        dispatch({type: 'HIDE_LOADER'})
    } catch (error) {
        console.log(error)
        dispatch({type: 'SHOW_ERROR', payload: error})
    }
}

export const Totalusers = () => async (dispatch) => {
    try {
        dispatch({type: 'SHOW_LOADER'})
        const {data} = await api.totalusers();
        // console.log("Totalusers",data)
        dispatch({type: 'ORDERS', payload: data})
        dispatch({type: 'HIDE_LOADER'})
    } catch (error) {
        console.log(error)
        dispatch({type: 'SHOW_ERROR', payload: error})
    }
}

export const Totalcategories = () => async (dispatch) => {
    try {
        dispatch({type: 'SHOW_LOADER'})
        const {data} = await api.totalcategories();
        // console.log("Totalcategories",data)
        dispatch({type: 'ORDERS', payload: data})
        dispatch({type: 'HIDE_LOADER'})
    } catch (error) {
        console.log(error)
        dispatch({type: 'SHOW_ERROR', payload: error})
    }
}

export const Totalproducts = () => async (dispatch) => {
    try {
        dispatch({type: 'SHOW_LOADER'})
        const {data} = await api.totalproducts();
        // console.log("Totalproducts",data)
        dispatch({type: 'ORDERS', payload: data})
        dispatch({type: 'HIDE_LOADER'})
    } catch (error) {
        console.log(error)
        dispatch({type: 'SHOW_ERROR', payload: error})
    }
}