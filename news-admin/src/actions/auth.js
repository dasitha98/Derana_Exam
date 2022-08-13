import * as api from '../api/auth'

export const Signup = (formData) => async (dispatch) => {
    try {
        dispatch({type: 'SHOW_LOADER'})
        const {data} = await api.signup(formData);
        dispatch({type: 'SIGNUP', payload: data})
        dispatch({type: 'HIDE_LOADER'})
    } catch (error) {
        console.log(error)
        dispatch({type: 'SHOW_ERROR', payload: error})
    }
}

export const Signin = (formData) => async (dispatch) => {
    try {
        dispatch({type: 'SHOW_LOADER'})
        console.log("Signin formData", formData);

        const {data} = await api.signin(formData); 
        console.log("Signin action", data.result);
        dispatch({type: 'SIGNIN', payload: data.result})
        dispatch({type: 'HIDE_LOADER'})
    } catch (error) {
        console.log(error)
        dispatch({type: 'SHOW_ERROR', payload: error})
    }
}


export const SigninToken = (formData) => async (dispatch) => {
    try {
        dispatch({type: 'SHOW_LOADER'})
        console.log("SigninToken formData", formData);

        const {data} = await api.tokenlink(formData);
        console.log("SigninToken action", data.tokenstring);
        dispatch({type: 'TOKEN', payload: data.tokenstring})
        dispatch({type: 'HIDE_LOADER'})
    } catch (error) {
        console.log(error)
        dispatch({type: 'SHOW_ERROR', payload: error})
    }
}


export const Getusers = () => async (dispatch) => {
    try {
        dispatch({type: 'SHOW_LOADER'})
        const {data} = await api.getusers();
        dispatch({type: 'GET', payload: data.oldUser})
        dispatch({type: 'HIDE_LOADER'})
    } catch (error) {
        console.log(error)
        dispatch({type: 'SHOW_ERROR', payload: error})
    }
}
