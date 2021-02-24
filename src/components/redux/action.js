export const GET_SMALL_DATA = 'GET_SMALL_DATA'
export const GET_BIG_DATA = 'GET_BIG_DATA'
export const ADD_NEW_USER = 'ADD_NEW_USER'
export const SET_FIND_USER = 'SET_FIND_USER'

export const setSmallData = (data, setIsLoading) => ({type: GET_SMALL_DATA, data, setIsLoading});
export const setBigData = (data, setIsLoading) => ({type: GET_BIG_DATA, data, setIsLoading});
export const addNewUserToState = (formValues) => ({type: ADD_NEW_USER, formValues});
export const setValue = (value) => ({type: SET_FIND_USER, value});
