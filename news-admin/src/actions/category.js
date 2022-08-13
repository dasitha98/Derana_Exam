import * as api from '../api/category'

export const AddCategory = (formData) => async (dispatch) => {
    try {
        dispatch({type: 'SHOW_LOADER'})
        const {data} = await api.addcategory(formData);
        console.log(data)
        dispatch({type: 'ADD', payload: data})
        dispatch({type: 'HIDE_LOADER'})
    } catch (error) {
        console.log(error)
        dispatch({type: 'SHOW_ERROR', payload: error})
    }
}

export const Getcategory = () => async (dispatch) => {
    try {
        dispatch({type: 'SHOW_LOADER'})
        const {data} = await api.getcategory();
        dispatch({type: 'GET', payload: data.oldUser})
        dispatch({type: 'HIDE_LOADER'})
    } catch (error) {
        console.log(error)
        dispatch({type: 'SHOW_ERROR', payload: error})
    }
}
